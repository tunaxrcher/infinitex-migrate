import { PrismaClient as OldPrismaClient } from '../../prisma/generated/old-prisma';
import { PrismaClient as NewPrismaClient } from '../../prisma/generated/new-prisma';

export const oldDb = new OldPrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_OLD_DB + (process.env.DATABASE_URL_OLD_DB?.includes('?') ? '&' : '?') + 'allowInvalidDates=true',
    },
  },
});

export const newDb = new NewPrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_NEW_DB,
    },
  },
});

export async function connectDatabases() {
  try {
    await oldDb.$connect();
    console.log('✅ Connected to OLD database');
    
    await newDb.$connect();
    console.log('✅ Connected to NEW database');
    
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}

export async function disconnectDatabases() {
  await oldDb.$disconnect();
  await newDb.$disconnect();
  console.log('🔌 Disconnected from databases');
}

