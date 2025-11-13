# 📘 คู่มือการย้ายข้อมูลระบบสินเชื่อ (Migration Guide)

## 📑 สารบัญ

1. [ภาพรวมการย้ายข้อมูล](#ภาพรวมการย้ายข้อมูล)
2. [ตาราง Mapping แบบละเอียด](#ตาราง-mapping-แบบละเอียด)
3. [ขั้นตอนการ Migrate](#ขั้นตอนการ-migrate)
4. [ข้อควรระวังและแนวทางแก้ไข](#ข้อควรระวังและแนวทางแก้ไข)
5. [การตรวจสอบความถูกต้อง](#การตรวจสอบความถูกต้อง)

---

## ภาพรวมการย้ายข้อมูล

### ระบบเก่า (Old Schema)
- **ฐานข้อมูล**: MySQL
- **จำนวนตาราง**: 14 ตาราง
- **Primary Key**: INT (auto-increment)
- **Soft Delete**: ใช้ `deleted_at`
- **ภาษา**: Enum เป็นภาษาไทย

### ระบบใหม่ (New Schema)
- **ฐานข้อมูล**: MySQL
- **จำนวนตาราง**: 19 ตาราง (รวม feature ใหม่)
- **Primary Key**: String (UUID)
- **Active Status**: ใช้ `isActive` boolean
- **ภาษา**: Enum เป็นภาษาอังกฤษ

---

## ตาราง Mapping แบบละเอียด

### 1️⃣ loan_customer → users + user_profiles

#### ตาราง users

| Field เก่า | Field ใหม่ | Type เก่า | Type ใหม่ | การแปลงค่า | หมายเหตุ |
|------------|------------|-----------|-----------|------------|----------|
| - | id | - | String | UUID ใหม่ | Primary Key |
| customer_phone | phoneNumber | VARCHAR(20)? | VARCHAR(20) | normalize 10 หลัก | **Required**, Unique |
| - | userType | - | Enum | 'CUSTOMER' | Default |
| deleted_at | isActive | DateTime? | Boolean | NULL → true | Soft delete |
| created_at | createdAt | DateTime? | DateTime | คัดลอก | |
| updated_at | updatedAt | DateTime? | DateTime | คัดลอก | |

#### ตาราง user_profiles

| Field เก่า | Field ใหม่ | Type เก่า | Type ใหม่ | การแปลงค่า | หมายเหตุ |
|------------|------------|-----------|-----------|------------|----------|
| - | id | - | String | UUID ใหม่ | Primary Key |
| - | userId | - | String | FK จาก users | |
| customer_fullname | firstName | VARCHAR(50)? | VARCHAR(255)? | แยกชื่อ | ใช้ก่อนช่องว่างสุดท้าย |
| customer_fullname | lastName | VARCHAR(50)? | VARCHAR(255)? | แยกนามสกุล | ใช้หลังช่องว่างสุดท้าย |
| customer_card_id | idCardNumber | VARCHAR(13)? | VARCHAR(13)? | ตรวจสอบ 13 หลัก | Unique |
| customer_birthday | dateOfBirth | Date? | DateTime? | แปลง Date | |
| customer_address | address | MediumText? | Text? | คัดลอก | |
| customer_email | email | VARCHAR(255)? | VARCHAR(255)? | คัดลอก | |
| img | idCardFrontImage | MediumText? | VARCHAR(500)? | คัดลอก | รูปบัตร |
| - | coinBalance | - | Int | 0 | Default |

**ตัวอย่างการแปลง:**
```typescript
// Old Data
{
  id: 1,
  customer_fullname: "สมชาย ใจดี",
  customer_phone: "0812345678",
  customer_card_id: "1234567890123",
  deleted_at: null
}

// New Data - users
{
  id: "uuid-generated-1",
  phoneNumber: "0812345678",
  userType: "CUSTOMER",
  isActive: true
}

// New Data - user_profiles
{
  id: "uuid-generated-2",
  userId: "uuid-generated-1",
  firstName: "สมชาย",
  lastName: "ใจดี",
  idCardNumber: "1234567890123",
  coinBalance: 0
}
```

---

### 2️⃣ loan → loan_applications + loans

#### ตาราง loan_applications

| Field เก่า | Field ใหม่ | การแปลงค่า | หมายเหตุ |
|------------|------------|------------|----------|
| - | id | UUID ใหม่ | Primary Key |
| loan_customer | customerId | lookup จาก users | FK |
| loan_employee | agentId | lookup จาก admins | FK (optional) |
| loan_type | loanType | CASH → HOUSE_LAND_MORTGAGE<br>HIRE_PURCHASE → CAR_REGISTRATION | Enum mapping |
| loan_summary_no_vat | requestedAmount | คัดลอก Decimal | |
| loan_summary_no_vat | approvedAmount | คัดลอก Decimal | |
| loan_area | propertyArea | คัดลอก | |
| loan_address | propertyLocation | คัดลอก | |
| loan_number | landNumber | คัดลอก | เลขที่โฉนด |
| loan_customer | ownerName | คัดลอก | ชื่อเจ้าของ |
| created_at | submittedAt | คัดลอก | |
| created_at | reviewedAt | คัดลอก | |

#### ตาราง loans

| Field เก่า | Field ใหม่ | การแปลงค่า | หมายเหตุ |
|------------|------------|------------|----------|
| - | id | UUID ใหม่ | Primary Key |
| loan_code | loanNumber | คัดลอก | Unique |
| loan_customer | customerId | lookup จาก users | FK |
| - | applicationId | จาก loan_applications | FK, Unique |
| loan_type | loanType | แปลง Enum | เหมือน loan_applications |
| loan_summary_no_vat | principalAmount | คัดลอก Decimal(15,2) | เงินต้น |
| loan_payment_interest | interestRate | คัดลอก Decimal(5,2) | % ดอกเบี้ย |
| loan_payment_year_counter | termMonths | คูณ 12 | ปี → เดือน |
| loan_payment_month | monthlyPayment | คัดลอก Decimal(15,2) | ค่างวด/เดือน |
| loan_payment_sum_installment | currentInstallment | คัดลอก Int | งวดปัจจุบัน |
| loan_payment_year_counter | totalInstallments | คูณ 12 | รวมทั้งหมด |
| loan_summary_all - loan_really_pay | remainingBalance | คำนวณ | ยอดคงเหลือ |
| loan_installment_date | nextPaymentDate | คัดลอก Date | วันชำระถัดไป |
| loan_date_promise | contractDate | คัดลอก Date | วันทำสัญญา |
| loan_date_close | expiryDate | คัดลอก Date หรือคำนวณ | วันหมดอายุ |
| loan_number | titleDeedNumber | คัดลอก | เลขที่โฉนด |
| loan_summary_no_vat | collateralValue | คัดลอก | มูลค่าหลักประกัน |

**ตัวอย่างการคำนวณ:**
```typescript
// คำนวณ termMonths
termMonths = loan_payment_year_counter * 12
// ถ้า loan_payment_year_counter = 5 ปี → termMonths = 60

// คำนวณ remainingBalance
remainingBalance = toDecimal(loan_summary_all) - toDecimal(loan_really_pay)
// ถ้า loan_summary_all = 500000, loan_really_pay = 150000
// → remainingBalance = 350000

// คำนวณ expiryDate (ถ้าไม่มี loan_date_close)
expiryDate = contractDate + (termMonths * 30 days)
```

---

### 3️⃣ loan_payment → payments + loan_installments

#### ตาราง payments

| Field เก่า | Field ใหม่ | การแปลงค่า | หมายเหตุ |
|------------|------------|------------|----------|
| - | id | UUID ใหม่ | Primary Key |
| loan_payment_customer | userId | lookup จาก users | FK |
| loan_code | loanId | lookup จาก loans | FK |
| - | installmentId | จับคู่จาก loan_installments | FK (optional) |
| loan_payment_amount | amount | คัดลอก Decimal(15,2) | |
| loan_payment_pay_type | paymentMethod | แปลง Enum:<br>'เงินสด' → CASH<br>'qr' → QR_CODE<br>'barcode' → BARCODE<br>'โอน' → BANK_TRANSFER<br>'internet' → INTERNET_BANKING | |
| - | status | 'COMPLETED' | ชำระแล้วทั้งหมด |
| payment_file_ref_no | referenceNumber | คัดลอก หรือสร้างใหม่ | Unique, Required |
| payment_file_ref_no | transactionId | คัดลอก | |
| land_account_name | bankName | คัดลอก | |
| loan_payment_date_fix | dueDate | คัดลอก Date | วันครบกำหนด |
| loan_payment_date | paidDate | คัดลอก Date | วันที่ชำระจริง |
| loan_payment_amount - loan_interest | principalAmount | คำนวณ | เงินต้น |
| loan_interest | interestAmount | คัดลอก Decimal(15,2) | ดอกเบี้ย |
| - | feeAmount | 0 | ค่าธรรมเนียม |

#### ตาราง loan_installments (สร้างใหม่)

| Field | การสร้าง | หมายเหตุ |
|-------|---------|----------|
| id | UUID ใหม่ | |
| loanId | จาก loans.id | FK |
| installmentNumber | 1, 2, 3, ..., termMonths | เรียงลำดับ |
| dueDate | contractDate + (n * 1 เดือน) | คำนวณจาก contractDate |
| principalAmount | monthlyPayment * 0.8 | ประมาณการ 80% |
| interestAmount | monthlyPayment * 0.2 | ประมาณการ 20% |
| totalAmount | monthlyPayment | |
| isPaid | เช็คจาก payments | ถ้ามี payment ที่ตรงกับงวดนี้ |
| paidDate | จาก payments.paidDate | |
| paidAmount | จาก payments.amount | |
| isLate | paidDate > dueDate | คำนวณ |
| lateDays | paidDate - dueDate (days) | ถ้า > 0 |

**ตัวอย่างการสร้าง loan_installments:**
```typescript
// สมมติ loan มี termMonths = 12, contractDate = 2024-01-01

const installments = [];
for (let i = 1; i <= 12; i++) {
  const dueDate = new Date('2024-01-01');
  dueDate.setMonth(dueDate.getMonth() + i);
  
  // ตรวจสอบว่างวดนี้ชำระแล้วหรือยัง
  const payment = payments.find(p => 
    p.loanId === loan.id && 
    p.dueDate >= dueDate
  );
  
  installments.push({
    id: generateUUID(),
    loanId: loan.id,
    installmentNumber: i,
    dueDate: dueDate, // 2024-02-01, 2024-03-01, ...
    principalAmount: loan.monthlyPayment * 0.8,
    interestAmount: loan.monthlyPayment * 0.2,
    totalAmount: loan.monthlyPayment,
    isPaid: !!payment,
    paidDate: payment?.paidDate,
    paidAmount: payment?.amount,
    isLate: payment ? (payment.paidDate > dueDate) : false,
    lateDays: payment ? calculateDays(dueDate, payment.paidDate) : null
  });
}
```

---

### 4️⃣ picture_loan_other → loan_applications.supportingImages

| Field เก่า | Field ใหม่ | การแปลงค่า | หมายเหตุ |
|------------|------------|------------|----------|
| loan_code | - | ใช้เป็น lookup key | หา loan_application |
| picture_loan_src | supportingImages | รวบรวมเป็น JSON array | `["url1", "url2", ...]` |

**ตัวอย่าง:**
```typescript
// Old Data
[
  { loan_code: "L001", picture_loan_src: "/images/loan1_pic1.jpg" },
  { loan_code: "L001", picture_loan_src: "/images/loan1_pic2.jpg" },
  { loan_code: "L002", picture_loan_src: "/images/loan2_pic1.jpg" }
]

// New Data - loan_applications
{
  id: "uuid-app-1",
  landNumber: "L001",
  supportingImages: ["/images/loan1_pic1.jpg", "/images/loan1_pic2.jpg"]
}
{
  id: "uuid-app-2",
  landNumber: "L002",
  supportingImages: ["/images/loan2_pic1.jpg"]
}
```

---

### 5️⃣ setting_land → system_config

| Field เก่า | Field ใหม่ | การแปลงค่า | หมายเหตุ |
|------------|------------|------------|----------|
| id | - | ใช้สร้าง key | |
| land_account_name | key | `account_${id}` | Unique |
| land_account_name + land_account_cash | value | JSON string: `{"name": "...", "cash": 0.00}` | |
| land_account_name | description | `Account: ${name}` | |

---

### 6️⃣ documents → audit_logs (Optional)

| Field เก่า | Field ใหม่ | การแปลงค่า |
|------------|------------|------------|
| - | id | UUID ใหม่ |
| doc_type | action | 'ใบสำคัญรับ' → 'PAYMENT_RECEIVED'<br>'ใบสำคัญจ่าย' → 'DOCUMENT_CREATED' |
| doc_number | entityId | คัดลอก |
| title, price, cash_flow_name | newData | JSON object |
| username | adminId | คัดลอก (ถ้ามี) |

---

## ขั้นตอนการ Migrate

### ขั้นตอนที่ 1: เตรียมความพร้อม

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. Generate Prisma Client
npm run prisma:generate

# 3. สร้างไฟล์ .env
cp .env.example .env

# 4. แก้ไข database URLs
nano .env
```

### ขั้นตอนที่ 2: ตรวจสอบข้อมูลเก่า

```sql
-- เช็คจำนวนข้อมูล
SELECT COUNT(*) FROM loan_customer WHERE deleted_at IS NULL;
SELECT COUNT(*) FROM loan WHERE deleted_at IS NULL;
SELECT COUNT(*) FROM loan_payment WHERE deleted_at IS NULL;

-- เช็คข้อมูลที่อาจมีปัญหา
SELECT id, customer_fullname, customer_phone 
FROM loan_customer 
WHERE customer_phone IS NULL OR customer_phone = ''
AND deleted_at IS NULL;

-- เช็ค phone number ซ้ำ
SELECT customer_phone, COUNT(*) as count
FROM loan_customer
WHERE deleted_at IS NULL
GROUP BY customer_phone
HAVING count > 1;
```

### ขั้นตอนที่ 3: Backup ฐานข้อมูล

```bash
# Backup old database
mysqldump -u username -p old_loan_db > backup_old_db_$(date +%Y%m%d).sql

# Backup new database (ก่อน migrate)
mysqldump -u username -p new_loan_db > backup_new_db_before_$(date +%Y%m%d).sql
```

### ขั้นตอนที่ 4: ทดสอบ Dry Run

```bash
npm run migrate:dry
```

ตรวจสอบผลลัพธ์:
- จำนวน records ที่จะ migrate
- จำนวน records ที่จะ skip
- Error messages (ถ้ามี)

### ขั้นตอนที่ 5: รัน Migration จริง

```bash
npm run migrate
```

### ขั้นตอนที่ 6: ตรวจสอบผลลัพธ์

```sql
-- เช็คจำนวนข้อมูลใหม่
SELECT COUNT(*) FROM users WHERE userType = 'CUSTOMER';
SELECT COUNT(*) FROM user_profiles;
SELECT COUNT(*) FROM loans;
SELECT COUNT(*) FROM payments;
SELECT COUNT(*) FROM loan_installments;

-- เช็คความถูกต้องของข้อมูล
SELECT u.phoneNumber, up.firstName, up.lastName
FROM users u
JOIN user_profiles up ON up.userId = u.id
LIMIT 10;

-- เช็ค loan numbers
SELECT loanNumber, principalAmount, remainingBalance
FROM loans
LIMIT 10;
```

---

## ข้อควรระวังและแนวทางแก้ไข

### ⚠️ ปัญหาที่พบบ่อย

#### 1. Phone Number ซ้ำกัน

**ปัญหา**: `users.phoneNumber` ต้อง unique แต่มี customer หลายคนใช้เบอร์เดียวกัน

**วิธีแก้**:
```sql
-- หา customer ที่เบอร์ซ้ำ
SELECT customer_phone, GROUP_CONCAT(id) as ids, COUNT(*) as count
FROM loan_customer
WHERE deleted_at IS NULL
GROUP BY customer_phone
HAVING count > 1;

-- แก้ไขด้วยการรวม customer ที่ซ้ำ หรือแก้ไขเบอร์โทร
-- Option 1: รวม customer (เลือกคนที่มี loan มากที่สุด)
-- Option 2: เพิ่มเลขต่อท้าย (0812345678 → 0812345678, 08123456782)
```

#### 2. ID Card ไม่ถูกต้อง

**ปัญหา**: `idCardNumber` ต้องเป็น 13 หลักพอดี

**วิธีแก้**:
```typescript
// ในโค้ด helpers.ts มีฟังก์ชัน validateIdCard
// ถ้าไม่ผ่าน จะ return null และไม่เก็บค่า
```

#### 3. ชื่อ-นามสกุล เป็นคำเดียว

**ปัญหา**: `customer_fullname` เป็นคำเดียว (เช่น "สมชาย") แต่ต้องแยกเป็น firstName, lastName

**วิธีแก้**:
```typescript
// ฟังก์ชัน splitFullName จะใส่ lastName = "-" ให้อัตโนมัติ
{
  firstName: "สมชาย",
  lastName: "-"
}
```

#### 4. Loan ไม่มี Customer

**ปัญหา**: `loan.loan_customer` เป็นชื่อ แต่ไม่ตรงกับ `loan_customer.customer_fullname`

**วิธีแก้**:
```typescript
// Option 1: แก้ไขโค้ดให้ match แบบ fuzzy
const customer = await oldDb.loan_customer.findFirst({
  where: {
    customer_fullname: { contains: loan.loan_customer }
  }
});

// Option 2: สร้าง lookup table ก่อน migrate
const customerMapping = {};
oldCustomers.forEach(c => {
  customerMapping[c.customer_fullname] = c.id;
});
```

#### 5. Payment Reference Number ซ้ำ

**ปัญหา**: `payments.referenceNumber` ต้อง unique แต่ `payment_file_ref_no` มีค่าซ้ำหรือ NULL

**วิธีแก้**:
```typescript
// สร้าง reference number ใหม่
const refNumber = payment.payment_file_ref_no || 
  helpers.generateReferenceNumber('PAY', payment.id);
// PAY17314576001, PAY17314576002, ...
```

#### 6. Date/Time Format

**ปัญหา**: วันที่อาจเป็น NULL หรือ format ไม่ถูกต้อง

**วิธีแก้**:
```typescript
// ใช้ฟังก์ชัน toISODate
const dueDate = helpers.toISODate(payment.loan_payment_date_fix) || new Date();
```

---

## การตรวจสอบความถูกต้อง

### 1. เช็คจำนวน Records

```typescript
// สคริปต์ตรวจสอบ (validate.ts)
const oldCustomerCount = await oldDb.loan_customer.count({
  where: { deleted_at: null }
});
const newUserCount = await newDb.users.count({
  where: { userType: 'CUSTOMER' }
});

console.log('Old Customers:', oldCustomerCount);
console.log('New Users:', newUserCount);
console.log('Difference:', oldCustomerCount - newUserCount);
```

### 2. เช็ค Data Integrity

```sql
-- เช็คว่า loan ทุกตัวมี customer
SELECT COUNT(*) 
FROM loans l
LEFT JOIN users u ON l.customerId = u.id
WHERE u.id IS NULL;
-- ต้องได้ 0

-- เช็คว่า payment ทุกตัวมี loan
SELECT COUNT(*)
FROM payments p
LEFT JOIN loans l ON p.loanId = l.id
WHERE l.id IS NULL;
-- ต้องได้ 0

-- เช็คว่า installments = termMonths
SELECT l.loanNumber, l.totalInstallments, COUNT(li.id) as actual_installments
FROM loans l
LEFT JOIN loan_installments li ON li.loanId = l.id
GROUP BY l.id, l.loanNumber, l.totalInstallments
HAVING l.totalInstallments != actual_installments;
-- ต้องได้ 0 rows
```

### 3. เช็ค Business Logic

```sql
-- เช็คยอดเงิน: principalAmount + interestAmount = totalAmount (ในแต่ละ installment)
SELECT *
FROM loan_installments
WHERE ABS(principalAmount + interestAmount - totalAmount) > 0.01;
-- ต้องได้ 0 rows

-- เช็ค remainingBalance ไม่เป็นลบ
SELECT loanNumber, remainingBalance
FROM loans
WHERE remainingBalance < 0;
-- ต้องได้ 0 rows (เว้นแต่มีการชำระเกิน)

-- เช็ค isLate กับ lateDays
SELECT *
FROM loan_installments
WHERE isLate = true AND (lateDays IS NULL OR lateDays = 0);
-- ต้องได้ 0 rows
```

### 4. สคริปต์ตรวจสอบอัตโนมัติ

สร้างไฟล์ `src/validate.ts`:

```typescript
import { oldDb, newDb } from './config/database';

async function validate() {
  console.log('🔍 Validating migration...\n');
  
  // 1. Count comparison
  const oldCounts = {
    customers: await oldDb.loan_customer.count({ where: { deleted_at: null } }),
    loans: await oldDb.loan.count({ where: { deleted_at: null } }),
    payments: await oldDb.loan_payment.count({ where: { deleted_at: null } }),
  };
  
  const newCounts = {
    users: await newDb.users.count({ where: { userType: 'CUSTOMER' } }),
    loans: await newDb.loans.count(),
    payments: await newDb.payments.count(),
  };
  
  console.table({
    'Customers/Users': { old: oldCounts.customers, new: newCounts.users },
    'Loans': { old: oldCounts.loans, new: newCounts.loans },
    'Payments': { old: oldCounts.payments, new: newCounts.payments },
  });
  
  // 2. Check orphans
  const orphanLoans = await newDb.loans.count({
    where: { customerId: { not: { in: (await newDb.users.findMany()).map(u => u.id) } } }
  });
  
  console.log(`\n🔗 Orphaned loans: ${orphanLoans} (should be 0)`);
  
  // 3. Sample data check
  const sampleUser = await newDb.users.findFirst({
    include: { user_profiles: true }
  });
  
  console.log('\n👤 Sample User:');
  console.log(JSON.stringify(sampleUser, null, 2));
}

validate();
```

---

## 📞 ติดต่อและรายงานปัญหา

หากพบปัญหาหรือข้อสงสัย:
1. ตรวจสอบ logs ใน console
2. ตรวจสอบ migration summary table
3. รัน validation script
4. ติดต่อทีมพัฒนา

---

**เวอร์ชัน**: 1.0.0  
**อัปเดตล่าสุด**: พฤศจิกายน 2024  
**ผู้เขียน**: Data Migration Team

