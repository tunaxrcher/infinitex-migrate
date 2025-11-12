# 📝 สิ่งที่ปรับปรุงแล้ว

## ✅ Features ที่เพิ่มเข้ามา

### 1. เพิ่มตารางใหม่ใน New Schema
- ✅ `documents` - เก็บข้อมูลเอกสารทางการเงิน
- ✅ `document_title_lists` - รายการชื่อเอกสาร
- ✅ Enums: `documents_docType`, `document_title_lists_docType`

### 2. เพิ่มฟิลด์ใหม่ใน `loans` table
- ✅ `linkMap` (Text) - ลิงก์แผนที่
- ✅ `landAccountId` (Int?) - รหัสบัญชีที่ชำระ
- ✅ `landAccountName` (String?) - ชื่อบัญชีที่ชำระ

### 3. แปลง Picture Paths เป็น Full URLs
จาก:
```
LOA000018_OTHER_8038504.jpg
```

เป็น:
```json
[
  "https://infinitex-demo.sgp1.digitaloceanspaces.com/supporting-images/LOA000018_OTHER_8038504.jpg",
  "https://infinitex-demo.sgp1.digitaloceanspaces.com/supporting-images/LOA000018_OTHER_4459008.jpg"
]
```

### 4. Migrate Functions ใหม่
- ✅ `migrateDocuments()` - migrate ไปตาราง documents จริงๆ แทน audit_logs
- ✅ `migrateDocumentTitleLists()` - migrate รายการชื่อเอกสาร

---

## ⚠️ สิ่งที่ต้องทำก่อนรัน Migration

### 1. Push Schema ไปยังฐานข้อมูลใหม่

```bash
npx prisma db push --schema=./prisma/new/schema.prisma
```

คำสั่งนี้จะ:
- เพิ่ม columns ใหม่ใน `loans` table (`linkMap`, `landAccountId`, `landAccountName`)
- สร้างตาราง `documents` และ `document_title_lists`
- เพิ่ม enums ใหม่

### 2. เพิ่ม STORAGE_URL ใน .env (Optional)

ถ้าต้องการเปลี่ยน URL ของรูปภาพ:

```env
STORAGE_URL="https://your-storage-url.com/path"
```

Default: `https://infinitex-demo.sgp1.digitaloceanspaces.com/supporting-images`

### 3. แก้ไขปัญหา Customers ไม่มีเบอร์โทร

ข้อมูล customers ทั้งหมด (55 คน) **ไม่มีเบอร์โทร** ทำให้ migrate ไม่ได้

**วิธีแก้**: รัน SQL ในฐานข้อมูลเก่า:

```sql
-- ใส่เบอร์ dummy
UPDATE loan_customer 
SET customer_phone = CONCAT('0800000', LPAD(id, 3, '0'))
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '');

-- ผลลัพธ์: customer ID 1 จะได้เบอร์ '0800000001'
```

---

## 📊 สรุปการเปลี่ยนแปลง

### Schema Changes (prisma/new/schema.prisma)

```prisma
// ✅ เพิ่มฟิลด์ใน loans
model loans {
  // ... existing fields ...
  linkMap            String?        @db.Text
  landAccountId      Int?
  landAccountName    String?        @db.VarChar(200)
}

// ✅ เพิ่มตาราง documents
model documents {
  id            String             @id
  docType       documents_docType
  docNumber     String             @db.VarChar(100)
  docDate       DateTime
  title         String             @db.Text
  price         Decimal            @db.Decimal(20, 2)
  cashFlowName  String             @db.VarChar(200)
  employeeId    Int                @default(0)
  username      String?            @db.VarChar(50)
  docFile       String?            @db.Text
  docFileDate   DateTime?
  docFileTime   String?            @db.VarChar(10)
  docFilePrice  Decimal?           @db.Decimal(20, 2)
  filePath      String?            @db.Text
  note          String?            @db.Text
  createdAt     DateTime           @default(now())
  updatedAt     DateTime
  deletedAt     DateTime?
}

// ✅ เพิ่มตาราง document_title_lists
model document_title_lists {
  id        String                          @id
  docType   document_title_lists_docType
  title     String                          @db.Text
  note      String?                         @db.Text
  createdAt DateTime                        @default(now())
  updatedAt DateTime
  deletedAt DateTime?
}
```

### Migration Script Changes (src/migrate.ts)

1. **migrateLoans()**: เพิ่ม `linkMap`, `landAccountId`, `landAccountName`
2. **migratePictureLoans()**: แปลง filenames เป็น full URLs
3. **migrateDocuments()**: ใช้ raw query และ migrate ไปตาราง `documents`
4. **migrateDocumentTitleLists()**: ฟังก์ชันใหม่

---

## 🚀 ขั้นตอนการใช้งาน

```bash
# 1. Push schema ใหม่ไปยัง database
npx prisma db push --schema=./prisma/new/schema.prisma

# 2. Generate Prisma client ใหม่
npm run prisma:generate

# 3. แก้ไขข้อมูล customers (เพิ่มเบอร์โทร) ในฐานข้อมูลเก่า

# 4. ทดสอบ dry run
npm run migrate:dry

# 5. รัน migration จริง
npm run migrate
```

---

## 📝 ตัวอย่างผลลัพธ์

### Pictures (supportingImages)
```json
{
  "id": "uuid-123",
  "landNumber": "LOA000018",
  "supportingImages": [
    "https://infinitex-demo.sgp1.digitaloceanspaces.com/supporting-images/LOA000018_OTHER_8038504.jpg",
    "https://infinitex-demo.sgp1.digitaloceanspaces.com/supporting-images/LOA000018_OTHER_4459008.jpg"
  ]
}
```

### Loans with new fields
```json
{
  "id": "uuid-456",
  "loanNumber": "LOA000018",
  "linkMap": "https://maps.google.com/?q=lat,lng",
  "landAccountId": 1,
  "landAccountName": "บัญชีเงินสดหลัก"
}
```

### Documents
```json
{
  "id": "uuid-789",
  "docType": "RECEIPT",
  "docNumber": "REC-001",
  "title": "ใบเสร็จรับเงิน",
  "price": 5000.00,
  "cashFlowName": "รายรับจากลูกค้า"
}
```

---

**Version**: 1.1.0  
**Date**: November 12, 2024

