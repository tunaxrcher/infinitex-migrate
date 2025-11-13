import dotenv from 'dotenv';
import { oldDb, newDb, connectDatabases, disconnectDatabases } from './config/database';
import { idMapper } from './utils/id-mapper';
import * as helpers from './utils/helpers';
import bcrypt from 'crypto';

dotenv.config();

// Configuration
const DRY_RUN = process.argv.includes('--dry-run') || process.env.DRY_RUN === 'true';
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '100', 10);

interface MigrationStats {
  tableName: string;
  oldCount: number;
  newCount: number;
  skipped: number;
  errors: number;
  duration: number;
}

const stats: MigrationStats[] = [];

/**
 * Main Migration Function
 */
async function migrate() {
  helpers.log('🚀 Starting Migration Process...');
  helpers.log(`📋 Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
  helpers.log(`📦 Batch Size: ${BATCH_SIZE}`);
  
  const startTime = Date.now();

  try {
    // 1. Connect to databases
    const connected = await connectDatabases();
    if (!connected) {
      throw new Error('Failed to connect to databases');
    }

    // 2. Create default admin
    await migrateAdmins();

    // 3. Create admins from employees
    await migrateEmployeesToAdmins();

    // 4. Create agent user
    await createAgentUser();

    // 5. Migrate loan_customer -> users + user_profiles
    await migrateCustomers();

    // 6. Migrate loan -> loan_applications + loans
    await migrateLoans();

    // 7. Migrate picture_loan_other -> update loan_applications
    await migratePictureLoans();

    // 8. Migrate loan_payment -> loan_installments (ทุกงวด)
    await migrateLoanInstallments();

    // 9. Migrate loan_payment (paid only) -> payments
    await migratePayments();

    // 10. Migrate setting_land -> land_accounts
    await migrateLandAccounts();

    // 11. Migrate setting_land_logs -> land_account_logs
    await migrateLandAccountLogs();

    // 12. Migrate setting_land_report -> land_account_reports
    await migrateLandAccountReports();

    // 13. Migrate documents -> documents table
    await migrateDocuments();

    // 14. Migrate document_title_lists
    await migrateDocumentTitleLists();

    // 15. Show summary
    showMigrationSummary(startTime);

  } catch (error) {
    helpers.logError('Migration failed', error);
    process.exit(1);
  } finally {
    await disconnectDatabases();
  }
}

/**
 * 1. Create Default Admins
 */
async function migrateAdmins() {
  const startTime = Date.now();
  helpers.log('👤 Creating default admins...');

  try {
    // Check if admin exists
    const existingAdmin = await newDb.admins.findFirst({
      where: { email: process.env.DEFAULT_ADMIN_EMAIL || 'admin@infinitex.com' }
    });

    if (existingAdmin) {
      helpers.log('   ℹ️  Default admin already exists, skipping...');
      return;
    }

    if (!DRY_RUN) {
      const adminId = idMapper.create('admins', 1);
      
      // Simple password hashing (in production, use bcrypt)
      const password = process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe123!';
      const hashedPassword = bcrypt.createHash('sha256').update(password).digest('hex');

      await newDb.admins.create({
        data: {
          id: adminId,
          email: process.env.DEFAULT_ADMIN_EMAIL || 'admin@infinitex.com',
          password: hashedPassword,
          firstName: process.env.DEFAULT_ADMIN_FIRSTNAME || 'Super',
          lastName: process.env.DEFAULT_ADMIN_LASTNAME || 'Admin',
          role: 'SUPER_ADMIN',
          isActive: true,
          updatedAt: new Date(),
        }
      });

      // Add all permissions
      const allPermissions = [
        'VIEW_APPLICATIONS', 'APPROVE_APPLICATIONS', 'REJECT_APPLICATIONS',
        'VIEW_LOANS', 'CREATE_LOANS', 'UPDATE_LOANS', 'DELETE_LOANS',
        'VIEW_USERS', 'CREATE_USERS', 'UPDATE_USERS', 'DELETE_USERS',
        'MANAGE_AGENTS', 'VIEW_PAYMENTS', 'PROCESS_PAYMENTS', 'REFUND_PAYMENTS',
        'MANAGE_BANNERS', 'MANAGE_PRIVILEGES', 'MANAGE_REWARDS',
        'MANAGE_SYSTEM_CONFIG', 'VIEW_AUDIT_LOGS', 'VIEW_REPORTS', 'EXPORT_DATA'
      ];

      for (const permission of allPermissions) {
        await newDb.admin_permissions.create({
          data: {
            id: idMapper.create('admin_permissions', allPermissions.indexOf(permission)),
            adminId,
            permission: permission as any,
            grantedBy: 'SYSTEM',
          }
        });
      }

      helpers.logSuccess('Default admin created', 1);
    }

    stats.push({
      tableName: 'admins',
      oldCount: 0,
      newCount: 1,
      skipped: 0,
      errors: 0,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to create admin', error);
    throw error;
  }
}

/**
 * 2. Create Agent User
 */
async function createAgentUser() {
  const startTime = Date.now();
  helpers.log('🤵 Creating Agent user...');

  try {
    const agentPhone = '0646267394';
    const agentPin = '7898';
    
    // Check if agent exists
    const existingAgent = await newDb.users.findUnique({
      where: { phoneNumber: agentPhone }
    });

    if (existingAgent) {
      helpers.log('   ℹ️  Agent already exists, using existing ID');
      idMapper.create('agent', 1); // Store mapping with dummy ID
      return;
    }

    if (!DRY_RUN) {
      const agentId = idMapper.create('agent', 1);
      
      // Create agent user
      await newDb.users.create({
        data: {
          id: agentId,
          phoneNumber: agentPhone,
          pin: agentPin,
          userType: 'AGENT',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      });

      // Create agent profile
      await newDb.user_profiles.create({
        data: {
          id: idMapper.create('agent_profile', 1),
          userId: agentId,
          firstName: 'Agent',
          lastName: 'Infinitex',
          preferredLanguage: 'th',
          coinBalance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      });

      helpers.logSuccess('Agent user created', 1);
    } else {
      idMapper.create('agent', 1);
      helpers.log('   ✅ Agent will be created');
    }

    stats.push({
      tableName: 'agent',
      oldCount: 0,
      newCount: 1,
      skipped: 0,
      errors: 0,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to create agent', error);
    throw error;
  }
}

/**
 * 3. Migrate employees (from various tables) -> admins
 */
async function migrateEmployeesToAdmins() {
  const startTime = Date.now();
  helpers.log('👨‍💼 Creating admins from employees...');

  try {
    // Get unique employees from setting_land_logs
    const employeesFromLogs = await oldDb.$queryRaw<any[]>`
      SELECT DISTINCT employee_id, employee_name
      FROM setting_land_logs
      WHERE deleted_at_logs IS NULL 
        AND employee_id IS NOT NULL
        AND employee_id > 0
      ORDER BY employee_id
    `;

    // Get unique employees from setting_land_report
    const employeesFromReports = await oldDb.$queryRaw<any[]>`
      SELECT DISTINCT employee_id, employee_name
      FROM setting_land_report
      WHERE deleted_at IS NULL 
        AND employee_id IS NOT NULL
        AND employee_id > 0
      ORDER BY employee_id
    `;

    // Merge and deduplicate
    const employeeMap = new Map<number, string>();
    
    for (const emp of employeesFromLogs) {
      if (emp.employee_id && !employeeMap.has(emp.employee_id)) {
        employeeMap.set(emp.employee_id, emp.employee_name || `Employee ${emp.employee_id}`);
      }
    }
    
    for (const emp of employeesFromReports) {
      if (emp.employee_id && !employeeMap.has(emp.employee_id)) {
        employeeMap.set(emp.employee_id, emp.employee_name || `Employee ${emp.employee_id}`);
      }
    }

    helpers.log(`   📊 Found ${employeeMap.size} unique employees to create as admins`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    if (!DRY_RUN) {
      for (const [employeeId, employeeName] of employeeMap.entries()) {
        try {
          // Special email for "อมฤต"
          let email = `employee${employeeId}@infinitex.com`;
          if (employeeName && (employeeName.includes('อมฤต') || employeeName.includes('Amarit'))) {
            email = 'amarit@infinitex.com';
          }
          
          // Check if admin already exists
          const existingAdmin = await newDb.admins.findUnique({
            where: { email }
          });

          if (existingAdmin) {
            // Store mapping
            idMapper.create('employees', employeeId);
            skipCount++;
            continue;
          }

          const adminId = idMapper.create('employees', employeeId);
          const { firstName, lastName } = helpers.splitFullName(employeeName);
          
          // Password: 2525 for all employees
          const hashedPassword = bcrypt.createHash('sha256')
            .update('2525')
            .digest('hex');

          await newDb.admins.create({
            data: {
              id: adminId,
              email,
              password: hashedPassword,
              firstName,
              lastName,
              role: 'LOAN_OFFICER',
              isActive: true,
              updatedAt: new Date(),
            }
          });

          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to create admin for employee ID ${employeeId}`, error.message);
          errorCount++;
        }
      }
    } else {
      // In dry run, still create mappings
      for (const [employeeId] of employeeMap.entries()) {
        idMapper.create('employees', employeeId);
      }
      successCount = employeeMap.size;
    }

    helpers.logSuccess('Employee admins created', successCount);
    if (skipCount > 0) helpers.log(`   ⚠️  Skipped: ${skipCount}`);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'employees (admins)',
      oldCount: employeeMap.size,
      newCount: successCount,
      skipped: skipCount,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate employees', error);
    throw error;
  }
}

/**
 * 4. Migrate loan_customer -> users + user_profiles
 */
async function migrateCustomers() {
  const startTime = Date.now();
  helpers.log('👥 Migrating customers (loan_customer -> users + user_profiles)...');

  try {
    // Use raw query and CAST to CHAR to handle invalid dates (0000-00-00)
    const oldCustomers = await oldDb.$queryRaw<any[]>`
      SELECT 
        id,
        loan_code,
        customer_fullname,
        customer_phone,
        CAST(customer_birthday AS CHAR) as customer_birthday,
        customer_card_id,
        customer_email,
        customer_gender,
        customer_address,
        img,
        created_at,
        updated_at
      FROM loan_customer
      WHERE deleted_at IS NULL
      ORDER BY id ASC
    `;

    helpers.log(`   📊 Found ${oldCustomers.length} customers to migrate`);

    // Get agent ID
    const agentId = idMapper.get('agent', 1);
    if (!agentId) {
      helpers.log('   ⚠️  Warning: Agent not found, customers will not be linked to agent');
    }

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    let autoPhoneCounter = 1; // Counter for auto-generated phone numbers

    for (const customer of oldCustomers) {
      try {
        // Validate or generate phone number
        let phoneNumber = helpers.normalizePhoneNumber(customer.customer_phone);
        
        // If no valid phone, generate one
        if (!phoneNumber) {
          phoneNumber = String(autoPhoneCounter).padStart(10, '0');
          autoPhoneCounter++;
          helpers.log(`   📱 Generated phone for customer ID ${customer.id}: ${phoneNumber}`);
        }

        // Check if phone already exists
        const existingUser = await newDb.users.findUnique({
          where: { phoneNumber }
        });

        if (existingUser) {
          helpers.log(`   ⚠️  Skipping customer ID ${customer.id}: Phone ${phoneNumber} already exists`);
          // Store mapping anyway
          idMapper.create('loan_customer', customer.id);
          skipCount++;
          continue;
        }

        if (!DRY_RUN) {
          const userId = idMapper.create('loan_customer', customer.id);
          const { firstName, lastName } = helpers.splitFullName(customer.customer_fullname);

          // Create user with PIN = 1234
          const pinHash = bcrypt.createHash('sha256').update('1234').digest('hex');
          
          await newDb.users.create({
            data: {
              id: userId,
              phoneNumber,
              pin: pinHash,
              userType: 'CUSTOMER',
              isActive: true,
              createdAt: customer.created_at || new Date(),
              updatedAt: customer.updated_at || new Date(),
            }
          });

          // Convert customer image to full URL
          const CUSTOMER_IMG_BASE_URL = 'https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_customer_img';
          let idCardImageUrl: string | undefined = undefined;
          if (customer.img) {
            const filename = customer.img.trim();
            idCardImageUrl = `${CUSTOMER_IMG_BASE_URL}/${filename}`;
          }

          // Create user profile
          await newDb.user_profiles.create({
            data: {
              id: idMapper.create('user_profiles', customer.id),
              userId,
              firstName,
              lastName,
              idCardNumber: helpers.validateIdCard(customer.customer_card_id),
              dateOfBirth: helpers.toISODate(customer.customer_birthday),
              address: customer.customer_address,
              email: customer.customer_email,
              idCardFrontImage: idCardImageUrl,
              coinBalance: 0,
              createdAt: customer.created_at || new Date(),
              updatedAt: customer.updated_at || new Date(),
            }
          });

          // Link customer to agent
          if (agentId) {
            await newDb.agent_customers.create({
              data: {
                id: idMapper.create('agent_customers', customer.id),
                agentId,
                customerId: userId,
                assignedAt: new Date(),
                isActive: true,
              }
            });
          }

          successCount++;
        } else {
          idMapper.create('loan_customer', customer.id);
          successCount++;
        }

      } catch (error: any) {
        helpers.logError(`Failed to migrate customer ID ${customer.id}`, error.message);
        errorCount++;
      }
    }

    helpers.logSuccess('Customers migrated', successCount);
    if (skipCount > 0) helpers.log(`   ⚠️  Skipped: ${skipCount}`);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'customers (users + user_profiles)',
      oldCount: oldCustomers.length,
      newCount: successCount,
      skipped: skipCount,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate customers', error);
    throw error;
  }
}

/**
 * 3. Migrate loan -> loan_applications + loans
 */
async function migrateLoans() {
  const startTime = Date.now();
  helpers.log('💰 Migrating loans (loan -> loan_applications + loans)...');

  try {
    // First, create a lookup map: loan_code -> old customer ID
    const customerLookup = await oldDb.$queryRaw<any[]>`
      SELECT loan_code, id as customer_id
      FROM loan_customer
      WHERE deleted_at IS NULL
      ORDER BY id
    `;
    
    const loanCodeToCustomerId = new Map<string, number>();
    for (const c of customerLookup) {
      if (c.loan_code) {
        loanCodeToCustomerId.set(c.loan_code, c.customer_id);
      }
    }
    
    helpers.log(`   📋 Created lookup map for ${loanCodeToCustomerId.size} loan codes`);

    const oldLoans = await oldDb.loan.findMany({
      where: { deleted_at: null },
      orderBy: { id: 'asc' }
    });

    helpers.log(`   📊 Found ${oldLoans.length} loans to migrate`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const loan of oldLoans) {
      try {
        // Find customer ID from loan_code (optional now)
        let customerId: string | null = null;
        
        if (loan.loan_code) {
          const oldCustomerId = loanCodeToCustomerId.get(loan.loan_code);
          if (oldCustomerId) {
            customerId = idMapper.get('loan_customer', oldCustomerId);
          }
        }
        
        // Allow loans without customers (customerId is now optional)
        if (!customerId) {
          helpers.log(`   ℹ️  Loan ID ${loan.id} (code: ${loan.loan_code}): No customer, migrating anyway`);
        }

        if (!DRY_RUN) {
          const applicationId = idMapper.create('loan_applications', loan.id);
          const hirePurchase = helpers.isHirePurchase(loan.loan_type);
          const loanStatus = helpers.mapLoanStatus(loan.loan_status);

          // Get agent ID (always use the main agent)
          const agentId = idMapper.get('agent', 1);

          // Create loan application
          await newDb.loan_applications.create({
            data: {
              id: applicationId,
              customerId,
              agentId: agentId || undefined,
              loanType: 'HOUSE_LAND_MORTGAGE', // ทุกรายการเป็นบ้านที่ดิน
              hirePurchase, // วิธีการจ่าย: เงินสด/เช่าซื้อ
              status: loanStatus === 'ACTIVE' ? 'APPROVED' : 'SUBMITTED',
              currentStep: 5,
              completedSteps: [1, 2, 3, 4, 5],
              requestedAmount: helpers.toDecimal(loan.loan_summary_no_vat),
              approvedAmount: helpers.toDecimal(loan.loan_summary_no_vat),
              propertyArea: loan.loan_area || undefined,
              propertyLocation: loan.loan_address || undefined,
              landNumber: loan.loan_number || undefined,
              ownerName: loan.loan_customer || undefined,
              submittedAt: loan.created_at || new Date(),
              reviewedAt: loan.created_at || new Date(),
              supportingImages: [],
              createdAt: loan.created_at || new Date(),
              updatedAt: loan.updated_at || new Date(),
            }
          });

          // Create loan for all statuses (including CANCELLED)
          const loanId = idMapper.create('loans', loan.id);
          const termMonths = (loan.loan_payment_year_counter || 1) * 12;

          await newDb.loans.create({
              data: {
                id: loanId,
                loanNumber: loan.loan_code || `LOAN-${loan.id}`,
                customerId,
                agentId: agentId || undefined,
                applicationId,
                loanType: 'HOUSE_LAND_MORTGAGE', // ทุกรายการเป็นบ้านที่ดิน
                hirePurchase, // วิธีการจ่าย: เงินสด/เช่าซื้อ
                status: loanStatus,
                principalAmount: helpers.toDecimal(loan.loan_summary_no_vat),
                interestRate: helpers.toDecimal(loan.loan_payment_interest),
                termMonths,
                monthlyPayment: helpers.toDecimal(loan.loan_payment_month),
                currentInstallment: 0,
                totalInstallments: termMonths,
                remainingBalance: helpers.toDecimal(loan.loan_summary_all) - helpers.toDecimal(loan.loan_really_pay),
                nextPaymentDate: loan.loan_installment_date || new Date(),
                contractDate: loan.loan_date_promise || loan.created_at || new Date(),
                expiryDate: loan.loan_date_close || new Date(Date.now() + termMonths * 30 * 24 * 60 * 60 * 1000),
                titleDeedNumber: loan.loan_number || undefined,
                collateralValue: helpers.toDecimal(loan.loan_summary_no_vat),
                linkMap: loan.link_map || undefined,
                landAccountId: loan.land_account_id || undefined,
                landAccountName: loan.land_account_name || undefined,
                createdAt: loan.created_at || new Date(),
                updatedAt: loan.updated_at || new Date(),
              }
          });

          successCount++;
        } else {
          idMapper.create('loan_applications', loan.id);
          idMapper.create('loans', loan.id);
          successCount++;
        }

      } catch (error: any) {
        helpers.logError(`Failed to migrate loan ID ${loan.id}`, error.message);
        errorCount++;
      }
    }

    helpers.logSuccess('Loans migrated', successCount);
    if (skipCount > 0) helpers.log(`   ⚠️  Skipped: ${skipCount}`);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'loans (loan_applications + loans)',
      oldCount: oldLoans.length,
      newCount: successCount,
      skipped: skipCount,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate loans', error);
    throw error;
  }
}

/**
 * 4. Migrate picture_loan_other -> loan_applications.supportingImages
 */
async function migratePictureLoans() {
  const startTime = Date.now();
  helpers.log('🖼️  Migrating loan pictures...');

  try {
    const oldPictures = await oldDb.picture_loan_other.findMany({
      orderBy: { loan_code: 'asc' }
    });

    helpers.log(`   📊 Found ${oldPictures.length} pictures to migrate`);

    // Group by loan_code and convert to full URLs
    const BASE_URL = process.env.STORAGE_URL || 'https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_payment_img';
    const picturesByLoan: Record<string, string[]> = {};
    
    for (const pic of oldPictures) {
      if (!pic.loan_code || !pic.picture_loan_src) continue;
      
      if (!picturesByLoan[pic.loan_code]) {
        picturesByLoan[pic.loan_code] = [];
      }
      
      // Convert filename to full URL
      const filename = pic.picture_loan_src.trim();
      const fullUrl = `${BASE_URL}/${filename}`;
      picturesByLoan[pic.loan_code].push(fullUrl);
    }

    // Create lookup map: loan_code -> loan ID -> loan_application ID
    const loanLookup = await oldDb.$queryRaw<any[]>`
      SELECT loan_code, id as loan_id
      FROM loan
      WHERE deleted_at IS NULL
    `;
    
    const loanCodeToOldId = new Map<string, number>();
    for (const l of loanLookup) {
      if (l.loan_code) {
        loanCodeToOldId.set(l.loan_code, l.loan_id);
      }
    }

    let successCount = 0;
    let notFoundCount = 0;

    if (!DRY_RUN) {
      for (const [loanCode, images] of Object.entries(picturesByLoan)) {
        try {
          // Find loan application ID from mapping
          const oldLoanId = loanCodeToOldId.get(loanCode);
          if (!oldLoanId) {
            notFoundCount++;
            continue;
          }

          const loanAppId = idMapper.get('loan_applications', oldLoanId);
          if (!loanAppId) {
            notFoundCount++;
            continue;
          }

          // Update loan application with pictures
          await newDb.loan_applications.update({
            where: { id: loanAppId },
            data: {
              supportingImages: images,
            }
          });
          
          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to update pictures for loan ${loanCode}`, error.message);
        }
      }
    } else {
      successCount = Object.keys(picturesByLoan).length;
    }

    helpers.logSuccess('Pictures migrated', successCount);
    if (notFoundCount > 0) helpers.log(`   ⚠️  Loan applications not found: ${notFoundCount}`);

    stats.push({
      tableName: 'picture_loan_other',
      oldCount: oldPictures.length,
      newCount: successCount,
      skipped: 0,
      errors: 0,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate pictures', error);
  }
}

/**
 * 5. Migrate loan_payment -> loan_installments (ทุกงวด)
 */
async function migrateLoanInstallments() {
  const startTime = Date.now();
  helpers.log('📅 Migrating loan installments from loan_payment...');

  try {
    // Use raw query to handle invalid dates
    const oldPayments = await oldDb.$queryRaw<any[]>`
      SELECT 
        id,
        loan_code,
        loan_payment_amount,
        loan_change,
        loan_interest,
        loan_employee,
        loan_payment_type,
        loan_payment_pay_type,
        loan_payment_installment,
        loan_payment_customer,
        loan_payment_src,
        CAST(payment_file_date AS CHAR) as payment_file_date,
        CAST(payment_file_time AS CHAR) as payment_file_time,
        payment_file_ref_no,
        payment_file_price,
        land_account_id,
        land_account_name,
        CAST(loan_payment_date_fix AS CHAR) as loan_payment_date_fix,
        CAST(loan_payment_date AS CHAR) as loan_payment_date,
        loan_balance,
        created_at,
        updated_at
      FROM loan_payment
      WHERE deleted_at IS NULL
      ORDER BY loan_code, id ASC
    `;

    helpers.log(`   📊 Found ${oldPayments.length} installment records to migrate`);

    // Create lookup map for loans
    const loanLookup = await oldDb.$queryRaw<any[]>`
      SELECT loan_code, id as loan_id
      FROM loan
      WHERE deleted_at IS NULL
    `;
    
    const loanCodeToLoanId = new Map<string, number>();
    for (const l of loanLookup) {
      if (l.loan_code) {
        loanCodeToLoanId.set(l.loan_code, l.loan_id);
      }
    }

    let installmentCount = 0;
    let errorCount = 0;

    // Group by loan_code to get installment numbers
    const installmentsByLoan = new Map<string, any[]>();
    for (const payment of oldPayments) {
      if (!payment.loan_code) continue;
      
      if (!installmentsByLoan.has(payment.loan_code)) {
        installmentsByLoan.set(payment.loan_code, []);
      }
      installmentsByLoan.get(payment.loan_code)!.push(payment);
    }

    if (!DRY_RUN) {
      for (const [loanCode, installments] of installmentsByLoan.entries()) {
        try {
          // Find loan ID
          const oldLoanId = loanCodeToLoanId.get(loanCode);
          if (!oldLoanId) continue;
          
          const loanId = idMapper.get('loans', oldLoanId);
          if (!loanId) continue;

          // Create installments
          for (let i = 0; i < installments.length; i++) {
            const inst = installments[i];
            const installmentNumber = i + 1;

            // Check if paid
            const isPaid = inst.loan_payment_type === 'Installment' || inst.loan_payment_type === 'Close';

            await newDb.loan_installments.create({
              data: {
                id: idMapper.create('loan_installments', inst.id),
                loanId,
                installmentNumber,
                dueDate: helpers.toISODate(inst.loan_payment_date_fix) || helpers.toISODate(inst.created_at) || new Date(),
                principalAmount: helpers.toDecimal(inst.loan_payment_amount) - helpers.toDecimal(inst.loan_interest),
                interestAmount: helpers.toDecimal(inst.loan_interest),
                totalAmount: helpers.toDecimal(inst.loan_payment_amount),
                isPaid,
                paidDate: isPaid ? helpers.toISODate(inst.loan_payment_date) : undefined,
                paidAmount: isPaid ? helpers.toDecimal(inst.loan_payment_amount) : undefined,
                isLate: false, // TODO: calculate based on dates
                lateDays: undefined,
                createdAt: inst.created_at || new Date(),
                updatedAt: inst.updated_at || new Date(),
              }
            });

            installmentCount++;
          }
        } catch (error: any) {
          helpers.logError(`Failed to create installments for loan ${loanCode}`, error.message);
          errorCount++;
        }
      }
    } else {
      installmentCount = oldPayments.length;
    }

    helpers.logSuccess('Loan installments created', installmentCount);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'loan_installments',
      oldCount: oldPayments.length,
      newCount: installmentCount,
      skipped: 0,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate loan installments', error);
  }
}

/**
 * 6. Migrate loan_payment (paid only) -> payments
 */
async function migratePayments() {
  const startTime = Date.now();
  helpers.log('💳 Migrating payments (paid installments only)...');

  try {
    // Get only paid installments (Installment or Close)
    const oldPayments = await oldDb.$queryRaw<any[]>`
      SELECT 
        id,
        loan_code,
        loan_payment_amount,
        loan_interest,
        loan_payment_type,
        loan_payment_pay_type,
        loan_payment_installment,
        CAST(payment_file_date AS CHAR) as payment_file_date,
        payment_file_ref_no,
        payment_file_price,
        land_account_id,
        land_account_name,
        CAST(loan_payment_date_fix AS CHAR) as loan_payment_date_fix,
        CAST(loan_payment_date AS CHAR) as loan_payment_date,
        created_at,
        updated_at
      FROM loan_payment
      WHERE deleted_at IS NULL
        AND (loan_payment_type = 'Installment' OR loan_payment_type = 'Close')
      ORDER BY id ASC
    `;

    helpers.log(`   📊 Found ${oldPayments.length} paid installments to create payments`);

    // Create lookup maps
    const customerLookup = await oldDb.$queryRaw<any[]>`
      SELECT loan_code, id as customer_id
      FROM loan_customer
      WHERE deleted_at IS NULL
    `;
    
    const loanCodeToCustomerId = new Map<string, number>();
    for (const c of customerLookup) {
      if (c.loan_code) {
        loanCodeToCustomerId.set(c.loan_code, c.customer_id);
      }
    }

    const loanLookup = await oldDb.$queryRaw<any[]>`
      SELECT loan_code, id as loan_id
      FROM loan
      WHERE deleted_at IS NULL
    `;
    
    const loanCodeToLoanId = new Map<string, number>();
    for (const l of loanLookup) {
      if (l.loan_code) {
        loanCodeToLoanId.set(l.loan_code, l.loan_id);
      }
    }

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    if (!DRY_RUN) {
      for (const payment of oldPayments) {
        try {
          // Find loan ID
          let loanId: string | null = null;
          if (payment.loan_code) {
            const oldLoanId = loanCodeToLoanId.get(payment.loan_code);
            if (oldLoanId) {
              loanId = idMapper.get('loans', oldLoanId);
            }
          }

          // Find user ID
          let userId: string | null = null;
          if (payment.loan_code) {
            const oldCustomerId = loanCodeToCustomerId.get(payment.loan_code);
            if (oldCustomerId) {
              userId = idMapper.get('loan_customer', oldCustomerId);
            }
          }

          // Find installment ID (from loan_installments we just created)
          const installmentId = idMapper.get('loan_installments', payment.id);

          const paymentId = idMapper.create('payments', payment.id);
          const refNumber = payment.payment_file_ref_no || helpers.generateReferenceNumber('PAY', payment.id);

          await newDb.payments.create({
            data: {
              id: paymentId,
              userId: userId || undefined,
              loanId: loanId || undefined,
              installmentId: installmentId || undefined,
              amount: helpers.toDecimal(payment.loan_payment_amount),
              paymentMethod: helpers.mapPaymentMethod(payment.loan_payment_pay_type),
              status: 'COMPLETED',
              referenceNumber: refNumber,
              transactionId: payment.payment_file_ref_no || undefined,
              bankName: payment.land_account_name || undefined,
              dueDate: helpers.toISODate(payment.loan_payment_date_fix) || helpers.toISODate(payment.loan_payment_date) || new Date(),
              paidDate: helpers.toISODate(payment.loan_payment_date) || new Date(),
              principalAmount: helpers.toDecimal(payment.loan_payment_amount) - helpers.toDecimal(payment.loan_interest),
              interestAmount: helpers.toDecimal(payment.loan_interest),
              feeAmount: 0,
              createdAt: payment.created_at || new Date(),
              updatedAt: payment.updated_at || new Date(),
            }
          });

          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to create payment ID ${payment.id}`, error.message);
          errorCount++;
        }
      }
    } else {
      successCount = oldPayments.length;
    }

    helpers.logSuccess('Payments created', successCount);
    if (skipCount > 0) helpers.log(`   ⚠️  Skipped: ${skipCount}`);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'payments',
      oldCount: oldPayments.length,
      newCount: successCount,
      skipped: skipCount,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate payments', error);
  }
}

// Old function removed - now using migrateLoanInstallments + migratePayments

/**
 * 10. Migrate setting_land -> land_accounts
 */
async function migrateLandAccounts() {
  const startTime = Date.now();
  helpers.log('🏦 Migrating land accounts...');

  try {
    // Get all settings (including soft-deleted ones to ensure we get all data)
    const oldSettings = await oldDb.setting_land.findMany({
      orderBy: { id: 'asc' }
    });

    helpers.log(`   📊 Found ${oldSettings.length} land accounts to migrate`);

    let successCount = 0;
    let errorCount = 0;

    if (!DRY_RUN) {
      for (const setting of oldSettings) {
        try {
          const accountId = idMapper.create('land_accounts', setting.id);
          
          await newDb.land_accounts.create({
            data: {
              id: accountId,
              accountName: setting.land_account_name,
              accountBalance: helpers.toDecimal(setting.land_account_cash),
              createdAt: setting.created_at || new Date(),
              updatedAt: setting.updated_at || new Date(),
              deletedAt: setting.deleted_at || undefined,
            }
          });

          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to migrate land account ID ${setting.id}`, error.message);
          errorCount++;
        }
      }
    } else {
      // In dry run, still create ID mappings
      for (const setting of oldSettings) {
        idMapper.create('land_accounts', setting.id);
      }
      successCount = oldSettings.length;
    }

    helpers.logSuccess('Land accounts migrated', successCount);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'land_accounts',
      oldCount: oldSettings.length,
      newCount: successCount,
      skipped: 0,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate land accounts', error);
  }
}

/**
 * 13. Migrate documents -> documents table
 */
async function migrateDocuments() {
  const startTime = Date.now();
  helpers.log('📄 Migrating documents...');

  try {
    // Use raw query to handle invalid dates
    const oldDocuments = await oldDb.$queryRaw<any[]>`
      SELECT 
        id,
        doc_type,
        doc_number,
        doc_date,
        title,
        price,
        cash_flow_name,
        employee_id,
        username,
        doc_file,
        CAST(doc_file_date AS CHAR) as doc_file_date,
        CAST(doc_file_time AS CHAR) as doc_file_time,
        doc_file_price,
        filePath,
        note,
        created_at,
        updated_at,
        deleted_at
      FROM documents
      WHERE deleted_at IS NULL
      ORDER BY created_at DESC
    `;

    helpers.log(`   📊 Found ${oldDocuments.length} documents to migrate`);

    let successCount = 0;
    let errorCount = 0;

    // Map enum values
    const mapDocType = (oldType: string): string => {
      switch (oldType) {
        case 'ใบสำคัญรับ': return 'RECEIPT';
        case 'ใบสำคัญจ่าย': return 'PAYMENT_VOUCHER';
        case 'ใบส่วนลด': return 'DISCOUNT_NOTE';
        case 'รายจ่าย': return 'EXPENSE';
        default: return 'RECEIPT';
      }
    };

    const DOC_BASE_URL = 'https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/file_loan';

    if (!DRY_RUN) {
      for (const doc of oldDocuments) {
        try {
          // Convert filenames to full URLs
          let docFileUrl: string | undefined = undefined;
          if (doc.doc_file) {
            const filename = doc.doc_file.trim();
            docFileUrl = `${DOC_BASE_URL}/${filename}`;
          }

          let filePathUrl: string | undefined = undefined;
          if (doc.filePath) {
            const filename = doc.filePath.trim();
            filePathUrl = `${DOC_BASE_URL}/${filename}`;
          }

          await newDb.documents.create({
            data: {
              id: idMapper.create('documents', doc.id),
              docType: mapDocType(doc.doc_type) as any,
              docNumber: doc.doc_number,
              docDate: doc.doc_date,
              title: doc.title,
              price: helpers.toDecimal(doc.price),
              cashFlowName: doc.cash_flow_name,
              employeeId: doc.employee_id || 0,
              username: doc.username || undefined,
              docFile: docFileUrl,
              docFileDate: helpers.toISODate(doc.doc_file_date),
              docFileTime: doc.doc_file_time || undefined,
              docFilePrice: doc.doc_file_price ? helpers.toDecimal(doc.doc_file_price) : undefined,
              filePath: filePathUrl,
              note: doc.note || undefined,
              createdAt: doc.created_at || new Date(),
              updatedAt: doc.updated_at || new Date(),
              deletedAt: doc.deleted_at || undefined,
            }
          });

          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to migrate document ID ${doc.id}`, error.message);
          errorCount++;
        }
      }
    } else {
      successCount = oldDocuments.length;
    }

    helpers.logSuccess('Documents migrated', successCount);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'documents',
      oldCount: oldDocuments.length,
      newCount: successCount,
      skipped: 0,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate documents', error);
  }
}

/**
 * 11. Migrate setting_land_logs -> land_account_logs
 */
async function migrateLandAccountLogs() {
  const startTime = Date.now();
  helpers.log('📝 Migrating land account logs...');

  try {
    const oldLogs = await oldDb.setting_land_logs.findMany({
      where: { deleted_at_logs: null },
      orderBy: { id: 'asc' }
    });

    helpers.log(`   📊 Found ${oldLogs.length} land account logs to migrate`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    if (!DRY_RUN) {
      for (const log of oldLogs) {
        try {
          // Find land account mapping
          const landAccountId = idMapper.get('land_accounts', log.setting_land_id);
          
          if (!landAccountId) {
            helpers.log(`   ⚠️  Skipping log ID ${log.id}: Land account not found`);
            skipCount++;
            continue;
          }

          // Find admin mapping from employee
          const adminId = idMapper.get('employees', log.employee_id);

          await newDb.land_account_logs.create({
            data: {
              id: idMapper.create('land_account_logs', log.id),
              landAccountId,
              detail: log.setting_land_detail,
              amount: helpers.toDecimal(log.setting_land_money),
              note: log.setting_land_note || undefined,
              adminId: adminId || undefined,
              adminName: log.employee_name || undefined,
              createdAt: log.created_at_logs || new Date(),
              updatedAt: log.updated_at_logs || new Date(),
              deletedAt: log.deleted_at_logs || undefined,
            }
          });

          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to migrate land account log ID ${log.id}`, error.message);
          errorCount++;
        }
      }
    } else {
      successCount = oldLogs.length;
    }

    helpers.logSuccess('Land account logs migrated', successCount);
    if (skipCount > 0) helpers.log(`   ⚠️  Skipped: ${skipCount}`);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'land_account_logs',
      oldCount: oldLogs.length,
      newCount: successCount,
      skipped: skipCount,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate land account logs', error);
  }
}

/**
 * 12. Migrate setting_land_report -> land_account_reports
 */
async function migrateLandAccountReports() {
  const startTime = Date.now();
  helpers.log('📊 Migrating land account reports...');

  try {
    const oldReports = await oldDb.setting_land_report.findMany({
      where: { deleted_at: null },
      orderBy: { id: 'asc' }
    });

    helpers.log(`   📊 Found ${oldReports.length} land account reports to migrate`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    if (!DRY_RUN) {
      for (const report of oldReports) {
        try {
          // Find land account mapping
          const landAccountId = idMapper.get('land_accounts', report.setting_land_id);
          
          if (!landAccountId) {
            helpers.log(`   ⚠️  Skipping report ID ${report.id}: Land account not found`);
            skipCount++;
            continue;
          }

          // Find admin mapping from employee
          const adminId = idMapper.get('employees', report.employee_id);

          await newDb.land_account_reports.create({
            data: {
              id: idMapper.create('land_account_reports', report.id),
              landAccountId,
              detail: report.setting_land_report_detail,
              amount: helpers.toDecimal(report.setting_land_report_money),
              note: report.setting_land_report_note || undefined,
              accountBalance: report.setting_land_report_account_balance ? 
                helpers.toDecimal(report.setting_land_report_account_balance) : undefined,
              adminId: adminId || undefined,
              adminName: report.employee_name || undefined,
              createdAt: report.created_at || new Date(),
              updatedAt: report.updated_at || new Date(),
              deletedAt: report.deleted_at || undefined,
            }
          });

          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to migrate land account report ID ${report.id}`, error.message);
          errorCount++;
        }
      }
    } else {
      successCount = oldReports.length;
    }

    helpers.logSuccess('Land account reports migrated', successCount);
    if (skipCount > 0) helpers.log(`   ⚠️  Skipped: ${skipCount}`);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'land_account_reports',
      oldCount: oldReports.length,
      newCount: successCount,
      skipped: skipCount,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate land account reports', error);
  }
}

/**
 * 14. Migrate document_title_lists
 */
async function migrateDocumentTitleLists() {
  const startTime = Date.now();
  helpers.log('📋 Migrating document title lists...');

  try {
    const oldTitles = await oldDb.document_title_lists.findMany({
      where: { deleted_at: null },
      orderBy: { id: 'asc' }
    });

    helpers.log(`   📊 Found ${oldTitles.length} document titles to migrate`);

    let successCount = 0;
    let errorCount = 0;

    // Map enum values
    const mapDocType = (oldType: string): string => {
      switch (oldType) {
        case 'ใบสำคัญรับ': return 'RECEIPT';
        case 'ใบสำคัญจ่าย': return 'PAYMENT_VOUCHER';
        default: return 'RECEIPT';
      }
    };

    if (!DRY_RUN) {
      for (const title of oldTitles) {
        try {
          await newDb.document_title_lists.create({
            data: {
              id: idMapper.create('document_title_lists', title.id),
              docType: mapDocType(title.doc_type) as any,
              title: title.title,
              note: title.note || undefined,
              createdAt: title.created_at || new Date(),
              updatedAt: title.updated_at || new Date(),
              deletedAt: title.deleted_at || undefined,
            }
          });

          successCount++;
        } catch (error: any) {
          helpers.logError(`Failed to migrate document title ID ${title.id}`, error.message);
          errorCount++;
        }
      }
    } else {
      successCount = oldTitles.length;
    }

    helpers.logSuccess('Document titles migrated', successCount);
    if (errorCount > 0) helpers.log(`   ❌ Errors: ${errorCount}`);

    stats.push({
      tableName: 'document_title_lists',
      oldCount: oldTitles.length,
      newCount: successCount,
      skipped: 0,
      errors: errorCount,
      duration: Date.now() - startTime,
    });

  } catch (error) {
    helpers.logError('Failed to migrate document titles', error);
  }
}

/**
 * Show Migration Summary
 */
function showMigrationSummary(startTime: number) {
  const totalDuration = Date.now() - startTime;
  
  helpers.log('\n' + '='.repeat(80));
  helpers.log('📊 MIGRATION SUMMARY');
  helpers.log('='.repeat(80));
  
  console.table(stats.map(s => ({
    'Table': s.tableName,
    'Old Records': s.oldCount,
    'Migrated': s.newCount,
    'Skipped': s.skipped,
    'Errors': s.errors,
    'Duration (s)': (s.duration / 1000).toFixed(2),
  })));
  
  helpers.log('='.repeat(80));
  helpers.log(`⏱️  Total Duration: ${(totalDuration / 1000).toFixed(2)}s`);
  helpers.log(`📈 ID Mappings:`);
  console.table(idMapper.getStats());
  helpers.log('='.repeat(80));
  helpers.logSuccess('Migration completed!');
}

// Run migration
migrate().catch(error => {
  helpers.logError('Fatal error', error);
  process.exit(1);
});

