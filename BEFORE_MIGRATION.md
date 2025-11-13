# 🚀 ขั้นตอนก่อนรัน Migration

## ✅ Checklist ก่อน Migrate

- [x] ติดตั้ง dependencies (`npm install`)
- [x] Generate Prisma clients (`npm run prisma:generate`)
- [x] Push schema ไปฐานข้อมูล (`npx prisma db push`)
- [ ] **แก้ไขข้อมูล customers** (สำคัญ!)
- [ ] Backup ฐานข้อมูล (เก่าและใหม่)
- [ ] ทดสอบ dry run
- [ ] รัน migration จริง

---

## 🔴 สิ่งที่ต้องทำก่อน (สำคัญมาก!)

### 1. แก้ไขข้อมูล Customers ให้มีเบอร์โทร

**ปัญหา**: Customers ทั้งหมด 55 คน **ไม่มีเบอร์โทร** ในฐานข้อมูลเก่า

**วิธีแก้**: รัน SQL script ในฐานข้อมูลเก่า

#### Option A: สร้างเบอร์ Dummy (แนะนำ)

```sql
-- ตรวจสอบก่อน
SELECT id, customer_fullname, customer_phone
FROM loan_customer 
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-')
LIMIT 10;

-- แก้ไข: สร้างเบอร์ format 0800000XXX
UPDATE loan_customer 
SET 
    customer_phone = CONCAT('0800000', LPAD(id, 3, '0')),
    updated_at = NOW()
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-');

-- ตรวจสอบผลลัพธ์
SELECT id, customer_fullname, customer_phone
FROM loan_customer 
WHERE customer_phone LIKE '0800000%'
LIMIT 10;
```

**ผลลัพธ์:**
- Customer ID 1 → `0800000001`
- Customer ID 12 → `0800000012`
- Customer ID 123 → `0800000123`

#### Option B: ใช้ไฟล์ SQL ที่เตรียมไว้

```bash
# รัน SQL script
mysql -u username -p old_loan_db < scripts/fix-customer-phones.sql
```

---

### 2. Backup ฐานข้อมูล

```bash
# Backup old database
mysqldump -u username -p old_loan_db > backup_old_$(date +%Y%m%d_%H%M%S).sql

# Backup new database
mysqldump -u username -p new_loan_db > backup_new_$(date +%Y%m%d_%H%M%S).sql
```

---

### 3. ทดสอบ Dry Run

```bash
npm run migrate:dry
```

ตรวจสอบว่า:
- ✅ Customers migrated > 0 (ไม่ skip ทั้งหมด)
- ✅ Loans migrated > 0
- ✅ Payments migrated > 0

---

### 4. รัน Migration จริง

```bash
npm run migrate
```

---

### 5. Validate ผลลัพธ์

```bash
npm run validate
```

---

## 📊 คำสั่งทั้งหมดตามลำดับ

```bash
# 1. Push schema (เสร็จแล้ว ✅)
npx prisma db push --schema=./prisma/new/schema.prisma

# 2. แก้ไขข้อมูล customers
mysql -u username -p old_loan_db < scripts/fix-customer-phones.sql

# หรือรัน SQL โดยตรง:
# mysql -u username -p old_loan_db
# > UPDATE loan_customer SET customer_phone = CONCAT('0800000', LPAD(id, 3, '0')) WHERE deleted_at IS NULL AND (customer_phone IS NULL OR customer_phone = '');

# 3. Backup
mysqldump -u username -p old_loan_db > backup_old.sql
mysqldump -u username -p new_loan_db > backup_new.sql

# 4. Dry run
npm run migrate:dry

# 5. Live migration
npm run migrate

# 6. Validate
npm run validate
```

---

## 🎯 Expected Results

หลัง migrate เสร็จ ควรได้:

```
================================================================================
📊 MIGRATION SUMMARY
================================================================================
┌─────────┬─────────────────────────────────────┬─────────────┬──────────┬─────────┐
│ (index) │ Table                               │ Old Records │ Migrated │ Skipped │
├─────────┼─────────────────────────────────────┼─────────────┼──────────┼─────────┤
│ 0       │ employees (admins)                  │ 4           │ 4        │ 0       │
│ 1       │ customers (users + user_profiles)   │ 55          │ 55       │ 0       │ ✅
│ 2       │ loans (applications + loans)        │ 326         │ 326      │ 0       │ ✅
│ 3       │ picture_loan_other                  │ 1078        │ 287      │ 0       │
│ 4       │ payments                            │ 3XXX        │ 3XXX     │ 0       │ ✅
│ 5       │ loan_installments                   │ 0           │ ~4000    │ 0       │ ✅
│ 6       │ land_accounts                       │ 3           │ 3        │ 0       │
│ 7       │ land_account_logs                   │ 155         │ 155      │ 0       │
│ 8       │ land_account_reports                │ 1783        │ 1783     │ 0       │
│ 9       │ documents                           │ 27          │ 27       │ 0       │
│ 10      │ document_title_lists                │ 5           │ 5        │ 0       │
└─────────┴─────────────────────────────────────┴─────────────┴──────────┴─────────┘
================================================================================
```

---

## ⚠️ หมายเหตุ

- เบอร์ที่สร้างเป็น **dummy numbers** (`0800000XXX`)
- **แจ้ง users** ให้อัพเดทเบอร์โทรที่ถูกต้องในระบบใหม่
- สามารถเพิ่ม validation ให้ user ใส่เบอร์จริงตอน login ครั้งแรก

---

**พร้อมแล้ว! เริ่ม migrate ได้เลย** 🚀

