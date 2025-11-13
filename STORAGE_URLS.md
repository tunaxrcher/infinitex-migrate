# 📸 Storage URLs Configuration

## Base URL
```
https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/
```

---

## 📁 Directory Structure

### 1. Loan Payment Images (`picture_loan_other`)
**Old DB**: `picture_loan_other.picture_loan_src`  
**New DB**: `loan_applications.supportingImages[]`

**Format:**
```
https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_payment_img/{filename}
```

**ตัวอย่าง:**
```
Old: LOA000001_OTHER_1545174.jpg
New: https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_payment_img/LOA000001_OTHER_1545174.jpg
```

**ใน Code:**
```typescript
const BASE_URL = 'https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_payment_img';
const fullUrl = `${BASE_URL}/${filename}`;
```

---

### 2. Document Files (`documents`)
**Old DB**: `documents.doc_file`, `documents.filePath`  
**New DB**: `documents.docFile`, `documents.filePath`

**Format:**
```
https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/file_loan/{filename}
```

**ตัวอย่าง:**
```
Old: 1751267559_e39e51bf70a263d612c9.jpg
New: https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/file_loan/1751267559_e39e51bf70a263d612c9.jpg
```

**ใน Code:**
```typescript
const DOC_BASE_URL = 'https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/file_loan';
const docFileUrl = `${DOC_BASE_URL}/${filename}`;
```

---

### 3. Customer Images (`loan_customer`)
**Old DB**: `loan_customer.img`  
**New DB**: `user_profiles.idCardFrontImage`

**Format:**
```
https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_customer_img/{filename}
```

**ตัวอย่าง:**
```
Old: customer_123.jpg
New: https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_customer_img/customer_123.jpg
```

**ใน Code:**
```typescript
const CUSTOMER_IMG_BASE_URL = 'https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_customer_img';
const imageUrl = `${CUSTOMER_IMG_BASE_URL}/${filename}`;
```

---

## 📊 Summary

| Old Table | Old Field | New Table | New Field | URL Path |
|-----------|-----------|-----------|-----------|----------|
| `picture_loan_other` | `picture_loan_src` | `loan_applications` | `supportingImages[]` | `/loan_payment_img/` |
| `documents` | `doc_file` | `documents` | `docFile` | `/file_loan/` |
| `documents` | `filePath` | `documents` | `filePath` | `/file_loan/` |
| `loan_customer` | `img` | `user_profiles` | `idCardFrontImage` | `/loan_customer_img/` |

---

## 🔄 Environment Variable (Optional)

ถ้าต้องการเปลี่ยน base URL ใน `.env`:

```env
STORAGE_BASE_URL="https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads"
```

---

## ✅ Verification

หลัง migrate เสร็จ ให้เช็ค URLs:

```sql
-- Check picture URLs
SELECT supportingImages 
FROM loan_applications 
WHERE supportingImages IS NOT NULL 
LIMIT 5;

-- Check document URLs
SELECT docFile, filePath 
FROM documents 
WHERE docFile IS NOT NULL 
LIMIT 5;

-- Check customer images
SELECT idCardFrontImage 
FROM user_profiles 
WHERE idCardFrontImage IS NOT NULL 
LIMIT 5;
```

**Expected Results:**
```json
// loan_applications.supportingImages
[
  "https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_payment_img/LOA000018_OTHER_8038504.jpg",
  "https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_payment_img/LOA000018_OTHER_4459008.jpg"
]

// documents.docFile
"https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/file_loan/1751267559_e39e51bf70a263d612c9.jpg"

// user_profiles.idCardFrontImage
"https://evxspst.sgp1.cdn.digitaloceanspaces.com/uploads/loan_customer_img/customer_123.jpg"
```

---

**Updated**: November 13, 2024  
**Version**: 1.2.0

