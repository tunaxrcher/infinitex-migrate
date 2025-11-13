import dotenv from 'dotenv';
import { oldDb, newDb, connectDatabases, disconnectDatabases } from './config/database';

dotenv.config();

async function compareData() {
  console.log('🔍 Comparing OLD vs NEW database...\n');

  try {
    await connectDatabases();

    // Compare loans
    console.log('💰 LOANS Comparison:');
    
    const oldLoans = await oldDb.$queryRaw<any[]>`
      SELECT 
        loan_status,
        COUNT(*) as count
      FROM loan
      WHERE deleted_at IS NULL
      GROUP BY loan_status
      ORDER BY loan_status
    `;

    const newLoans = await newDb.$queryRaw<any[]>`
      SELECT 
        status,
        COUNT(*) as count
      FROM loans
      GROUP BY status
      ORDER BY status
    `;

    console.log('\n📊 OLD DB - Loan Status:');
    console.table(oldLoans);

    console.log('\n📊 NEW DB - Loan Status:');
    console.table(newLoans);

    // Compare totals
    const oldTotal = await oldDb.loan.count({ where: { deleted_at: null } });
    const newTotal = await newDb.loans.count();

    console.log('\n📈 Totals:');
    console.log(`  Old DB: ${oldTotal} loans`);
    console.log(`  New DB: ${newTotal} loans`);
    console.log(`  Difference: ${oldTotal - newTotal} missing`);

    // Check which loan_status is missing
    console.log('\n🔍 Mapping Check:');
    console.log('  ON_STATE (105) → ACTIVE');
    console.log('  CLOSE_STATE (204) → COMPLETED');
    console.log('  CANCEL_STATE (17) → CANCELLED');

    // Check CANCELLED loans in new DB
    const cancelledCount = await newDb.loans.count({
      where: { status: 'CANCELLED' }
    });

    console.log(`\n❓ CANCELLED loans in NEW DB: ${cancelledCount} (expected: 17)`);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await disconnectDatabases();
  }
}

compareData();

