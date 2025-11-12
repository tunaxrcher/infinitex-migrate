import dotenv from 'dotenv';
import { oldDb, newDb, connectDatabases, disconnectDatabases } from './config/database';
import { log, logError, logSuccess } from './utils/helpers';

dotenv.config();

/**
 * Validation Script - ตรวจสอบความถูกต้องของข้อมูลหลัง migration
 */
async function validate() {
  log('🔍 Starting Data Validation...\n');

  try {
    const connected = await connectDatabases();
    if (!connected) {
      throw new Error('Failed to connect to databases');
    }

    // 1. Count Comparison
    await validateCounts();

    // 2. Data Integrity
    await validateDataIntegrity();

    // 3. Business Logic
    await validateBusinessLogic();

    // 4. Sample Data
    await showSampleData();

    logSuccess('\n✅ All validations completed!');

  } catch (error) {
    logError('Validation failed', error);
    process.exit(1);
  } finally {
    await disconnectDatabases();
  }
}

/**
 * 1. Validate Record Counts
 */
async function validateCounts() {
  log('📊 1. Validating Record Counts...');

  const oldCounts = {
    customers: await oldDb.loan_customer.count({ where: { deleted_at: null } }),
    loans: await oldDb.loan.count({ where: { deleted_at: null } }),
    payments: await oldDb.loan_payment.count({ where: { deleted_at: null } }),
    pictures: await oldDb.picture_loan_other.count(),
    settings: await oldDb.setting_land.count({ where: { deleted_at: null } }),
  };

  const newCounts = {
    users: await newDb.users.count({ where: { userType: 'CUSTOMER' } }),
    userProfiles: await newDb.user_profiles.count(),
    loanApplications: await newDb.loan_applications.count(),
    loans: await newDb.loans.count(),
    payments: await newDb.payments.count(),
    installments: await newDb.loan_installments.count(),
    systemConfigs: await newDb.system_config.count(),
    admins: await newDb.admins.count(),
  };

  console.log('\n📈 Old Database:');
  console.table(oldCounts);

  console.log('\n📈 New Database:');
  console.table(newCounts);

  // Calculate differences
  const diff = {
    'Customers → Users': newCounts.users - oldCounts.customers,
    'Loans → Loan Apps': newCounts.loanApplications - oldCounts.loans,
    'Loans → Loans': newCounts.loans - oldCounts.loans,
    'Payments → Payments': newCounts.payments - oldCounts.payments,
  };

  console.log('\n📉 Differences (negative = skipped records):');
  console.table(diff);

  // Check if users = userProfiles
  if (newCounts.users !== newCounts.userProfiles) {
    log(`   ⚠️  Users (${newCounts.users}) != User Profiles (${newCounts.userProfiles})`);
  } else {
    log(`   ✅ Users = User Profiles (${newCounts.users})`);
  }

  // Check installments
  const expectedInstallments = await newDb.loans.aggregate({
    _sum: { totalInstallments: true }
  });
  log(`   📊 Expected installments: ${expectedInstallments._sum.totalInstallments || 0}`);
  log(`   📊 Actual installments: ${newCounts.installments}`);
}

/**
 * 2. Validate Data Integrity (Foreign Keys)
 */
async function validateDataIntegrity() {
  log('\n🔗 2. Validating Data Integrity (Foreign Keys)...');

  // Check if all user_profiles have valid userId
  const orphanedProfiles = await newDb.user_profiles.count({
    where: {
      userId: {
        notIn: (await newDb.users.findMany({ select: { id: true } })).map(u => u.id)
      }
    }
  });
  log(`   User Profiles without User: ${orphanedProfiles} (should be 0)`);

  // Check if all loans have valid customerId
  const loansWithoutCustomer = await newDb.loans.count({
    where: {
      customerId: {
        notIn: (await newDb.users.findMany({ select: { id: true } })).map(u => u.id)
      }
    }
  });
  log(`   Loans without Customer: ${loansWithoutCustomer} (should be 0)`);

  // Check if all loans have valid applicationId
  const loansWithoutApplication = await newDb.loans.count({
    where: {
      applicationId: {
        notIn: (await newDb.loan_applications.findMany({ select: { id: true } })).map(a => a.id)
      }
    }
  });
  log(`   Loans without Application: ${loansWithoutApplication} (should be 0)`);

  // Check if all payments have valid loanId
  const paymentsWithoutLoan = await newDb.payments.count({
    where: {
      loanId: {
        notIn: (await newDb.loans.findMany({ select: { id: true } })).map(l => l.id)
      }
    }
  });
  log(`   Payments without Loan: ${paymentsWithoutLoan} (should be 0)`);

  // Check if all payments have valid userId
  const paymentsWithoutUser = await newDb.payments.count({
    where: {
      userId: {
        notIn: (await newDb.users.findMany({ select: { id: true } })).map(u => u.id)
      }
    }
  });
  log(`   Payments without User: ${paymentsWithoutUser} (should be 0)`);

  // Check if all installments have valid loanId
  const installmentsWithoutLoan = await newDb.loan_installments.count({
    where: {
      loanId: {
        notIn: (await newDb.loans.findMany({ select: { id: true } })).map(l => l.id)
      }
    }
  });
  log(`   Installments without Loan: ${installmentsWithoutLoan} (should be 0)`);

  // Summary
  const totalIssues = orphanedProfiles + loansWithoutCustomer + loansWithoutApplication + 
                      paymentsWithoutLoan + paymentsWithoutUser + installmentsWithoutLoan;
  
  if (totalIssues === 0) {
    logSuccess('   All foreign key relationships are valid!');
  } else {
    log(`   ⚠️  Found ${totalIssues} integrity issues`);
  }
}

/**
 * 3. Validate Business Logic
 */
async function validateBusinessLogic() {
  log('\n💼 3. Validating Business Logic...');

  // Check phone number format (should be 10 digits)
  const invalidPhones = await newDb.users.count({
    where: {
      phoneNumber: {
        not: { regex: '^0[0-9]{9}$' }
      }
    }
  });
  log(`   Invalid phone numbers: ${invalidPhones} (should be 0)`);

  // Check ID card numbers (should be 13 digits or null)
  const invalidIdCards = await newDb.user_profiles.count({
    where: {
      AND: [
        { idCardNumber: { not: null } },
        { idCardNumber: { not: { regex: '^[0-9]{13}$' } } }
      ]
    }
  });
  log(`   Invalid ID card numbers: ${invalidIdCards} (should be 0)`);

  // Check if remainingBalance is negative (might be OK if overpaid)
  const negativeBalance = await newDb.loans.count({
    where: { remainingBalance: { lt: 0 } }
  });
  log(`   Loans with negative balance: ${negativeBalance} (might be overpaid)`);

  // Check if loan installments match termMonths
  const loansWithMismatchedInstallments = await newDb.$queryRaw<any[]>`
    SELECT l.loanNumber, l.totalInstallments, COUNT(li.id) as actual_installments
    FROM loans l
    LEFT JOIN loan_installments li ON li.loanId = l.id
    GROUP BY l.id, l.loanNumber, l.totalInstallments
    HAVING l.totalInstallments != COUNT(li.id)
  `;
  log(`   Loans with mismatched installments: ${loansWithMismatchedInstallments.length} (should be 0)`);

  // Check installment amounts (principalAmount + interestAmount = totalAmount)
  const installmentsWithWrongTotal = await newDb.$queryRaw<any[]>`
    SELECT id
    FROM loan_installments
    WHERE ABS(principalAmount + interestAmount - totalAmount) > 0.01
  `;
  log(`   Installments with wrong totals: ${installmentsWithWrongTotal.length} (should be 0)`);

  // Check isLate flag consistency
  const installmentsWithWrongLateFlag = await newDb.loan_installments.count({
    where: {
      AND: [
        { isLate: true },
        { OR: [{ lateDays: null }, { lateDays: 0 }] }
      ]
    }
  });
  log(`   Installments with wrong isLate flag: ${installmentsWithWrongLateFlag} (should be 0)`);

  // Check unique constraints
  const duplicatePhones = await newDb.$queryRaw<any[]>`
    SELECT phoneNumber, COUNT(*) as count
    FROM users
    GROUP BY phoneNumber
    HAVING count > 1
  `;
  log(`   Duplicate phone numbers: ${duplicatePhones.length} (should be 0)`);

  const duplicateIdCards = await newDb.$queryRaw<any[]>`
    SELECT idCardNumber, COUNT(*) as count
    FROM user_profiles
    WHERE idCardNumber IS NOT NULL
    GROUP BY idCardNumber
    HAVING count > 1
  `;
  log(`   Duplicate ID card numbers: ${duplicateIdCards.length} (should be 0)`);

  const duplicateReferenceNumbers = await newDb.$queryRaw<any[]>`
    SELECT referenceNumber, COUNT(*) as count
    FROM payments
    GROUP BY referenceNumber
    HAVING count > 1
  `;
  log(`   Duplicate payment reference numbers: ${duplicateReferenceNumbers.length} (should be 0)`);

  // Summary
  const totalIssues = invalidPhones + invalidIdCards + loansWithMismatchedInstallments.length +
                      installmentsWithWrongTotal.length + installmentsWithWrongLateFlag +
                      duplicatePhones.length + duplicateIdCards.length + duplicateReferenceNumbers.length;

  if (totalIssues === 0) {
    logSuccess('   All business logic validations passed!');
  } else {
    log(`   ⚠️  Found ${totalIssues} business logic issues`);
  }
}

/**
 * 4. Show Sample Data
 */
async function showSampleData() {
  log('\n📋 4. Sample Data...');

  // Sample user with profile
  const sampleUser = await newDb.users.findFirst({
    include: {
      user_profiles: true
    },
    where: { userType: 'CUSTOMER' }
  });

  if (sampleUser) {
    log('\n👤 Sample User:');
    console.log(JSON.stringify({
      id: sampleUser.id,
      phoneNumber: sampleUser.phoneNumber,
      userType: sampleUser.userType,
      profile: sampleUser.user_profiles ? {
        firstName: sampleUser.user_profiles.firstName,
        lastName: sampleUser.user_profiles.lastName,
        idCardNumber: sampleUser.user_profiles.idCardNumber,
        coinBalance: sampleUser.user_profiles.coinBalance,
      } : null
    }, null, 2));
  }

  // Sample loan
  const sampleLoan = await newDb.loans.findFirst({
    include: {
      loan_applications: true
    }
  });

  if (sampleLoan) {
    log('\n💰 Sample Loan:');
    console.log(JSON.stringify({
      id: sampleLoan.id,
      loanNumber: sampleLoan.loanNumber,
      loanType: sampleLoan.loanType,
      status: sampleLoan.status,
      principalAmount: sampleLoan.principalAmount.toString(),
      interestRate: sampleLoan.interestRate.toString(),
      termMonths: sampleLoan.termMonths,
      monthlyPayment: sampleLoan.monthlyPayment.toString(),
      remainingBalance: sampleLoan.remainingBalance.toString(),
    }, null, 2));
  }

  // Sample payment
  const samplePayment = await newDb.payments.findFirst();

  if (samplePayment) {
    log('\n💳 Sample Payment:');
    console.log(JSON.stringify({
      id: samplePayment.id,
      amount: samplePayment.amount.toString(),
      paymentMethod: samplePayment.paymentMethod,
      status: samplePayment.status,
      referenceNumber: samplePayment.referenceNumber,
      paidDate: samplePayment.paidDate,
    }, null, 2));
  }

  // Sample installment
  const sampleInstallment = await newDb.loan_installments.findFirst();

  if (sampleInstallment) {
    log('\n📅 Sample Installment:');
    console.log(JSON.stringify({
      id: sampleInstallment.id,
      installmentNumber: sampleInstallment.installmentNumber,
      dueDate: sampleInstallment.dueDate,
      totalAmount: sampleInstallment.totalAmount.toString(),
      isPaid: sampleInstallment.isPaid,
      isLate: sampleInstallment.isLate,
      lateDays: sampleInstallment.lateDays,
    }, null, 2));
  }
}

// Run validation
validate().catch(error => {
  logError('Fatal error', error);
  process.exit(1);
});

