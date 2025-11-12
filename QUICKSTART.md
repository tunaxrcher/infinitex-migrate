# ⚡ Quick Start Guide - Data Migration

คู่มือเริ่มต้นใช้งานอย่างรวดเร็วสำหรับการย้ายข้อมูลระบบสินเชื่อ

---

## 🎯 ขั้นตอนสำคัญ 5 ขั้นตอน

### 1️⃣ ติดตั้ง Dependencies

```bash
npm install
```

### 2️⃣ Generate Prisma Clients

```bash
npm run prisma:generate
```

หรือ generate แยก:
```bash
npm run prisma:old   # Generate client สำหรับ old database
npm run prisma:new   # Generate client สำหรับ new database
```

### 3️⃣ ตั้งค่า Environment Variables

สร้างไฟล์ `.env`:

```bash
cp .env.example .env
```

แก้ไขไฟล์ `.env`:

```env
# Old Database (แหล่งข้อมูล)
DATABASE_URL_OLD_DB="mysql://user:password@localhost:3306/old_loan_db"

# New Database (ปลายทาง)
DATABASE_URL_NEW_DB="mysql://user:password@localhost:3306/new_loan_db"

# Default Admin (จะสร้างอัตโนมัติ)
DEFAULT_ADMIN_EMAIL="admin@infinitex.com"
DEFAULT_ADMIN_PASSWORD="ChangeMe123!"
```

### 4️⃣ ทดสอบก่อน (Dry Run)

```bash
npm run migrate:dry
```

ผลลัพธ์จะแสดง:
- ✅ จำนวน records ที่จะ migrate
- ⚠️ จำนวน records ที่จะ skip
- ❌ Error messages (ถ้ามี)

### 5️⃣ รัน Migration จริง

```bash
npm run migrate
```

---

## 📋 Commands ที่ใช้บ่อย

| Command | คำอธิบาย |
|---------|----------|
| `npm run migrate` | รัน migration จริง |
| `npm run migrate:dry` | ทดสอบโดยไม่เขียนข้อมูล |
| `npm run validate` | ตรวจสอบความถูกต้องหลัง migrate |
| `npm run migrate:rollback -- --confirm` | ย้อนกลับการ migrate (ลบข้อมูลทั้งหมด) |
| `npm run prisma:generate` | Generate Prisma clients ทั้งสอง |

---

## ⚠️ ข้อควรระวัง 3 อย่าง

### 1. Backup ก่อนเสมอ!

```bash
# Backup old database
mysqldump -u username -p old_loan_db > backup_old.sql

# Backup new database
mysqldump -u username -p new_loan_db > backup_new.sql
```

### 2. ทดสอบ Dry Run ก่อน

อย่ารัน `npm run migrate` ทันที ให้รัน `npm run migrate:dry` ก่อนเสมอ

### 3. ตรวจสอบหลัง Migrate

```bash
npm run validate
```

---

## 🐛 แก้ไขปัญหาที่พบบ่อย

### ปัญหา: Connection Error

```
❌ Database connection failed
```

**วิธีแก้**: 
- ตรวจสอบ `.env` ว่า DATABASE_URL ถูกต้องหรือไม่
- ตรวจสอบว่า database server เปิดอยู่
- ทดสอบ connection ด้วย MySQL client

### ปัญหา: Phone Number ซ้ำ

```
⚠️  Skipping customer ID xxx: Phone xxx already exists
```

**วิธีแก้**:
```sql
-- หา customer ที่เบอร์ซ้ำ
SELECT customer_phone, COUNT(*) as count
FROM loan_customer
WHERE deleted_at IS NULL
GROUP BY customer_phone
HAVING count > 1;

-- แก้ไขในฐานข้อมูลเก่าก่อน migrate
```

### ปัญหา: Prisma Client ไม่เจอ

```
Cannot find module '@prisma/client'
```

**วิธีแก้**:
```bash
npm run prisma:generate
```

---

## 📊 ตัวอย่างผลลัพธ์

### Dry Run Output

```
🚀 Starting Migration Process...
📋 Mode: DRY RUN
📦 Batch Size: 100
✅ Connected to OLD database
✅ Connected to NEW database

👤 Creating default admins...
   ✅ Default admin created (1 records)

👥 Migrating customers...
   📊 Found 1250 customers to migrate
   ✅ Customers migrated (1230 records)
   ⚠️  Skipped: 20

💰 Migrating loans...
   📊 Found 850 loans to migrate
   ✅ Loans migrated (845 records)
   ⚠️  Skipped: 5

...

================================================================================
📊 MIGRATION SUMMARY
================================================================================
┌─────────┬────────────────────────────────────┬─────────────┬──────────┬─────────┐
│ (index) │ Table                              │ Old Records │ Migrated │ Skipped │
├─────────┼────────────────────────────────────┼─────────────┼──────────┼─────────┤
│ 0       │ admins                             │ 0           │ 1        │ 0       │
│ 1       │ customers (users + user_profiles)  │ 1250        │ 1230     │ 20      │
│ 2       │ loans (applications + loans)       │ 850         │ 845      │ 5       │
│ 3       │ payments                           │ 3420        │ 3400     │ 20      │
└─────────┴────────────────────────────────────┴─────────────┴──────────┴─────────┘
================================================================================
⏱️  Total Duration: 0.00s (DRY RUN - no data written)
✅ Migration completed!
================================================================================
```

---

## 🔍 ตรวจสอบผลลัพธ์

หลัง migrate เสร็จ:

```bash
npm run validate
```

Output:

```
🔍 Starting Data Validation...

📊 1. Validating Record Counts...
   ✅ Users = User Profiles (1230)

🔗 2. Validating Data Integrity (Foreign Keys)...
   User Profiles without User: 0 (should be 0)
   Loans without Customer: 0 (should be 0)
   ✅ All foreign key relationships are valid!

💼 3. Validating Business Logic...
   Invalid phone numbers: 0 (should be 0)
   ✅ All business logic validations passed!

✅ All validations completed!
```

---

## 📚 เอกสารเพิ่มเติม

- **README.md** - คู่มือการใช้งานหลัก
- **MIGRATION_GUIDE.md** - คู่มือแบบละเอียดพร้อมตัวอย่าง
- **SUMMARY.md** - สรุปการวิเคราะห์และออกแบบ

---

## ✅ Checklist

ก่อนรัน migration จริง ให้ตรวจสอบ:

- [ ] ติดตั้ง dependencies แล้ว (`npm install`)
- [ ] Generate Prisma clients แล้ว (`npm run prisma:generate`)
- [ ] ตั้งค่า `.env` แล้ว
- [ ] Backup ฐานข้อมูลแล้ว (ทั้งเก่าและใหม่)
- [ ] ทดสอบ dry run แล้ว (`npm run migrate:dry`)
- [ ] เข้าใจ output ของ dry run แล้ว
- [ ] พร้อมรัน migration จริง

---

## 🚀 Ready to Migrate?

```bash
npm run migrate
```

---

**Need help?** อ่าน MIGRATION_GUIDE.md หรือติดต่อทีมพัฒนา

**Version**: 1.0.0

