# Infinitex Loan System - Data Migration Tool

เครื่องมือสำหรับย้ายข้อมูลจากระบบสินเชื่อเก่าไปยังระบบใหม่

## 📋 Overview

โปรเจกต์นี้ใช้สำหรับย้ายข้อมูลจาก:
- **Old Database**: ระบบสินเชื่อเดิม (loan, loan_customer, loan_payment, etc.)
- **New Database**: ระบบสินเชื่อใหม่ที่มีโครงสร้างและฟีเจอร์เพิ่มเติม (users, loans, payments, etc.)

## 🚀 Getting Started

### Prerequisites

- Node.js v18 หรือใหม่กว่า
- MySQL Database (สองฐานข้อมูล: เก่าและใหม่)
- npm หรือ yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Generate Prisma clients for both schemas
npm run prisma:generate

# หรือ generate แยก
npx prisma generate --schema=./prisma/old/schema.prisma
npx prisma generate --schema=./prisma/new/schema.prisma

# 3. Create .env file
cp .env.example .env

# 4. Update database URLs in .env
```

### Configuration

แก้ไขไฟล์ `.env`:

```env
# Old Database (Source)
DATABASE_URL_OLD_DB="mysql://username:password@localhost:3306/old_loan_db"

# New Database (Destination)
DATABASE_URL_NEW_DB="mysql://username:password@localhost:3306/new_loan_db"

# Migration Settings
DRY_RUN=false
BATCH_SIZE=100

# Default Admin Credentials
DEFAULT_ADMIN_EMAIL="admin@infinitex.com"
DEFAULT_ADMIN_PASSWORD="ChangeMe123!"
```

## 🔄 Migration Process

### 1. ทดสอบการ Migrate (Dry Run)

```bash
npm run migrate:dry
```

Dry run จะ:
- เชื่อมต่อกับฐานข้อมูลทั้งสอง
- อ่านข้อมูลจากฐานข้อมูลเก่า
- แสดงผลลัพธ์ว่าจะย้ายข้อมูลอะไรบ้าง
- **ไม่เขียนข้อมูลลงฐานข้อมูลจริง**

### 2. รัน Migration จริง

```bash
npm run migrate
```

Migration จะทำงานตามลำดับดังนี้:

1. **Create Admins** - สร้าง admin เริ่มต้น
2. **Migrate Customers** - `loan_customer` → `users` + `user_profiles`
3. **Migrate Loans** - `loan` → `loan_applications` + `loans`
4. **Migrate Pictures** - `picture_loan_other` → `loan_applications.supportingImages`
5. **Migrate Payments** - `loan_payment` → `payments`
6. **Create Installments** - สร้าง `loan_installments` จากข้อมูล loans
7. **Migrate Settings** - `setting_land` → `system_config`
8. **Migrate Documents** - `documents` → `audit_logs`

### 3. Rollback (ถ้าจำเป็น)

```bash
npm run migrate:rollback -- --confirm
```

⚠️ **คำเตือน**: Rollback จะลบข้อมูลทั้งหมดที่ migrate ไปแล้ว

## 📊 Mapping Table

### loan_customer → users + user_profiles

| Old Field | New Table | New Field | Transformation |
|-----------|-----------|-----------|----------------|
| id | users | - | สร้าง UUID ใหม่ |
| customer_phone | users | phoneNumber | normalize เบอร์โทร 10 หลัก |
| customer_fullname | user_profiles | firstName, lastName | แยกชื่อ-นามสกุล |
| customer_card_id | user_profiles | idCardNumber | ตรวจสอบ 13 หลัก |
| customer_birthday | user_profiles | dateOfBirth | แปลง Date |
| customer_email | user_profiles | email | คัดลอกตรง |
| customer_address | user_profiles | address | คัดลอกตรง |
| img | user_profiles | idCardFrontImage | รูปบัตรประชาชน |

### loan → loan_applications + loans

| Old Field | New Table | New Field | Transformation |
|-----------|-----------|-----------|----------------|
| id | loan_applications | - | สร้าง UUID |
| loan_code | loans | loanNumber | รหัสสินเชื่อ |
| loan_summary_no_vat | loans | principalAmount | เงินต้น |
| loan_payment_interest | loans | interestRate | ดอกเบี้ย |
| loan_payment_year_counter | loans | termMonths | แปลงปี → เดือน (x12) |
| loan_payment_month | loans | monthlyPayment | ค่างวดต่อเดือน |
| loan_type (CASH/HIRE_PURCHASE) | loans | loanType (HOUSE_LAND_MORTGAGE/CAR_REGISTRATION) | แปลง enum |

### loan_payment → payments

| Old Field | New Field | Transformation |
|-----------|-----------|----------------|
| loan_payment_amount | amount | จำนวนเงินชำระ |
| loan_interest | interestAmount | ดอกเบี้ย |
| loan_payment_date | paidDate | วันที่ชำระจริง |
| payment_file_ref_no | referenceNumber | เลขที่อ้างอิง |

## ⚠️ Important Notes

### 1. Primary Key Changes
- Old: `INT` auto-increment
- New: `String` UUID
- ใช้ `idMapper` เก็บ mapping ระหว่าง old ID และ new UUID

### 2. Required Fields
ระบบใหม่มีฟิลด์บังคับที่ต้องตรวจสอบ:
- `users.phoneNumber` - ต้องมีและ unique
- `user_profiles.firstName`, `lastName` - แยกจาก fullName
- `payments.referenceNumber` - ต้อง unique

### 3. Enum Mapping
- Old: ใช้ภาษาไทย ("เงินสด", "เช่าซื้อ")
- New: ใช้ภาษาอังกฤษ (CASH, HOUSE_LAND_MORTGAGE)

### 4. Soft Delete
- Old: `deleted_at IS NULL` = active
- New: `isActive = true`

### 5. Data Validation
- Phone numbers: ทำให้เป็น format 10 หลัก
- ID Card: ตรวจสอบ 13 หลัก
- Dates: แปลงเป็น ISO format พร้อม timezone

### 6. Skipped Tables
ตารางเหล่านี้ **ไม่** migrate (เพราะเป็น feature ใหม่):
- `sessions`, `admin_sessions` - session ใหม่
- `notifications` - notification ใหม่
- `coin_transactions`, `rewards`, `reward_redemptions` - reward system ใหม่
- `privileges`, `banners` - content management ใหม่
- `agent_customers` - agent system (ยังไม่มีในระบบเก่า)

## 🐛 Troubleshooting

### Connection Error
```
❌ Database connection failed
```
**วิธีแก้**: ตรวจสอบ `.env` ให้แน่ใจว่า DATABASE_URL ถูกต้อง

### Duplicate Phone Number
```
⚠️  Skipping customer ID xxx: Phone xxx already exists
```
**วิธีแก้**: 
- ตรวจสอบข้อมูล customer ที่มีเบอร์โทรซ้ำ
- รวมข้อมูล customer ที่ซ้ำกันก่อน migrate

### Missing Customer
```
⚠️  Skipping loan ID xxx: Customer not found
```
**วิธีแก้**:
- ตรวจสอบ loan.loan_customer ว่าตรงกับ loan_customer.customer_fullname หรือไม่
- อาจต้องปรับ logic การ match customer

## 📝 Logs

ระหว่าง migration จะแสดง log ดังนี้:

```
[2024-11-12T10:30:00.000Z] 🚀 Starting Migration Process...
[2024-11-12T10:30:00.000Z] 📋 Mode: LIVE
[2024-11-12T10:30:00.000Z] 📦 Batch Size: 100
[2024-11-12T10:30:01.000Z] ✅ Connected to OLD database
[2024-11-12T10:30:01.000Z] ✅ Connected to NEW database
[2024-11-12T10:30:02.000Z] 👤 Creating default admins...
[2024-11-12T10:30:02.000Z] ✅ Default admin created (1 records)
...
```

## 📊 Migration Summary

หลัง migrate เสร็จจะแสดงสรุปดังนี้:

```
================================================================================
📊 MIGRATION SUMMARY
================================================================================
┌─────────┬────────────────────────────────────┬─────────────┬──────────┬─────────┬────────┬──────────────┐
│ (index) │ Table                              │ Old Records │ Migrated │ Skipped │ Errors │ Duration (s) │
├─────────┼────────────────────────────────────┼─────────────┼──────────┼─────────┼────────┼──────────────┤
│ 0       │ 'admins'                           │ 0           │ 1        │ 0       │ 0      │ '0.50'       │
│ 1       │ 'customers (users + user_profiles)'│ 1250        │ 1230     │ 20      │ 0      │ '15.30'      │
│ 2       │ 'loans'                            │ 850         │ 845      │ 5       │ 0      │ '22.10'      │
│ 3       │ 'payments'                         │ 3420        │ 3400     │ 20      │ 0      │ '35.40'      │
└─────────┴────────────────────────────────────┴─────────────┴──────────┴─────────┴────────┴──────────────┘
================================================================================
⏱️  Total Duration: 73.30s
================================================================================
✅ Migration completed! (4 records)
================================================================================
```

## 🔐 Security

- เปลี่ยน `DEFAULT_ADMIN_PASSWORD` ใน `.env` ทันทีหลัง migrate
- ใช้ bcrypt สำหรับ hash password ในระบบ production
- อย่า commit `.env` เข้า git

## 📞 Support

หากพบปัญหาหรือมีคำถาม กรุณาติดต่อทีมพัฒนา

---

**Version**: 1.0.0  
**Last Updated**: November 2024

#   i n f i n i t e x - m i g r a t e  
 