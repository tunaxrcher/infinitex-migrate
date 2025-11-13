import dotenv from 'dotenv';
import { oldDb, newDb, connectDatabases, disconnectDatabases } from './config/database';
import { idMapper } from './utils/id-mapper';

dotenv.config();

async function debugPictures() {
  console.log('🔍 Debugging picture migration...\n');

  try {
    await connectDatabases();

    // Get sample pictures
    const samplePictures = await oldDb.$queryRaw<any[]>`
      SELECT loan_code, picture_loan_src
      FROM picture_loan_other
      ORDER BY loan_code
      LIMIT 20
    `;

    console.log('📸 Sample Pictures from OLD DB:');
    console.table(samplePictures);

    // Group by loan_code
    const picturesByLoan: Record<string, string[]> = {};
    for (const pic of samplePictures) {
      if (!pic.loan_code || !pic.picture_loan_src) continue;
      
      if (!picturesByLoan[pic.loan_code]) {
        picturesByLoan[pic.loan_code] = [];
      }
      
      const BASE_URL = 'https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_payment_img';
      const filename = pic.picture_loan_src.trim();
      const fullUrl = `${BASE_URL}/${filename}`;
      picturesByLoan[pic.loan_code].push(fullUrl);
    }

    console.log('\n📦 Grouped by Loan Code:');
    for (const [loanCode, urls] of Object.entries(picturesByLoan)) {
      console.log(`\n${loanCode}:`);
      urls.forEach((url, i) => console.log(`  [${i}] ${url}`));
    }

    // Check if loans exist in NEW DB
    console.log('\n🔍 Checking if loans exist in NEW DB:');
    const newLoans = await newDb.loans.findMany({
      take: 10,
      select: {
        id: true,
        loanNumber: true,
        applicationId: true,
      }
    });

    console.log('\n💰 Sample Loans in NEW DB:');
    console.table(newLoans);

    // Check if any loan applications have supportingImages
    const appsWithImages = await newDb.loan_applications.findMany({
      where: {
        supportingImages: { not: { equals: [] } }
      },
      take: 5,
      select: {
        id: true,
        supportingImages: true,
      }
    });

    console.log('\n🖼️  Loan Applications with Images:');
    if (appsWithImages.length === 0) {
      console.log('  ❌ No loan applications have images yet');
    } else {
      console.table(appsWithImages.map(app => ({
        id: app.id.substring(0, 8) + '...',
        imageCount: Array.isArray(app.supportingImages) ? app.supportingImages.length : 0,
        firstImage: Array.isArray(app.supportingImages) && app.supportingImages.length > 0 
          ? String(app.supportingImages[0]).substring(0, 50) + '...' 
          : 'none'
      })));
    }

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await disconnectDatabases();
  }
}

debugPictures();

