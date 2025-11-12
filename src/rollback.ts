import dotenv from 'dotenv';
import { newDb, connectDatabases, disconnectDatabases } from './config/database';
import { log, logError, logSuccess } from './utils/helpers';

dotenv.config();

/**
 * Rollback Script - ลบข้อมูลที่ migrate แล้วออกจากฐานข้อมูลใหม่
 * ⚠️ ระวัง: script นี้จะลบข้อมูลทั้งหมดในตารางที่เกี่ยวข้อง
 */
async function rollback() {
  log('🔄 Starting Rollback Process...');
  log('⚠️  WARNING: This will delete ALL migrated data!');
  
  const startTime = Date.now();

  try {
    const connected = await connectDatabases();
    if (!connected) {
      throw new Error('Failed to connect to databases');
    }

    // Confirm rollback
    const shouldContinue = process.argv.includes('--confirm');
    if (!shouldContinue) {
      log('❌ Rollback cancelled. Use --confirm flag to proceed.');
      log('   Example: npm run migrate:rollback -- --confirm');
      return;
    }

    log('🗑️  Deleting data in reverse order...');

    // Delete in reverse dependency order
    await newDb.audit_logs.deleteMany({});
    log('   ✅ Deleted audit_logs');

    await newDb.loan_installments.deleteMany({});
    log('   ✅ Deleted loan_installments');

    await newDb.payments.deleteMany({});
    log('   ✅ Deleted payments');

    await newDb.loans.deleteMany({});
    log('   ✅ Deleted loans');

    await newDb.loan_applications.deleteMany({});
    log('   ✅ Deleted loan_applications');

    await newDb.user_profiles.deleteMany({});
    log('   ✅ Deleted user_profiles');

    await newDb.users.deleteMany({});
    log('   ✅ Deleted users');

    await newDb.system_config.deleteMany({});
    log('   ✅ Deleted system_config');

    await newDb.admin_permissions.deleteMany({});
    log('   ✅ Deleted admin_permissions');

    await newDb.admins.deleteMany({});
    log('   ✅ Deleted admins');

    // Keep these tables (they're not part of migration)
    // - sessions
    // - admin_sessions
    // - notifications
    // - coin_transactions
    // - rewards
    // - reward_redemptions
    // - privileges
    // - banners
    // - agent_customers

    const duration = Date.now() - startTime;
    log('='.repeat(80));
    logSuccess(`Rollback completed in ${(duration / 1000).toFixed(2)}s`);
    log('='.repeat(80));

  } catch (error) {
    logError('Rollback failed', error);
    process.exit(1);
  } finally {
    await disconnectDatabases();
  }
}

// Run rollback
rollback().catch(error => {
  logError('Fatal error', error);
  process.exit(1);
});

