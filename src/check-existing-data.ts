import dotenv from 'dotenv';
import { newDb, connectDatabases, disconnectDatabases } from './config/database';

dotenv.config();

async function checkExistingData() {
  console.log('🔍 Checking existing data in NEW database...\n');

  try {
    await connectDatabases();

    // Check existing data
    const counts = {
      admins: await newDb.admins.count(),
      users: await newDb.users.count(),
      userProfiles: await newDb.user_profiles.count(),
      loans: await newDb.loans.count(),
      loanApplications: await newDb.loan_applications.count(),
      payments: await newDb.payments.count(),
      landAccounts: await newDb.land_accounts.count(),
    };

    console.log('📊 Existing Records in NEW Database:');
    console.table(counts);

    // Check agent
    const agent = await newDb.users.findFirst({
      where: { userType: 'AGENT' }
    });

    if (agent) {
      const agentProfile = await newDb.user_profiles.findFirst({
        where: { userId: agent.id }
      });
      
      console.log('\n🤵 Agent Found:');
      console.log({
        id: agent.id,
        phoneNumber: agent.phoneNumber,
        pin: agent.pin ? '***' : null,
        profile: agentProfile ? {
          firstName: agentProfile.firstName,
          lastName: agentProfile.lastName,
        } : null
      });
    }

    // Check sample loans
    const sampleLoans = await newDb.loans.findMany({
      take: 5
    });

    console.log('\n💰 Sample Loans:');
    console.table(sampleLoans.map(l => ({
      loanNumber: l.loanNumber,
      customerId: l.customerId ? 'Yes' : 'No',
      agentId: l.agentId ? 'Yes' : 'No',
      loanType: l.loanType,
      hirePurchase: l.hirePurchase,
      status: l.status,
    })));

    // Check loan status distribution
    const loanStatusDist = await newDb.$queryRaw<any[]>`
      SELECT status, COUNT(*) as count
      FROM loans
      GROUP BY status
      ORDER BY count DESC
    `;

    console.log('\n📈 Loan Status Distribution in NEW DB:');
    console.table(loanStatusDist);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await disconnectDatabases();
  }
}

checkExistingData();

