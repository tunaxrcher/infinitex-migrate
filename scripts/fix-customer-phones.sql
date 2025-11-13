-- =========================================================
-- Script สำหรับแก้ไขข้อมูล Customers ที่ไม่มีเบอร์โทร
-- =========================================================
-- ⚠️  รันใน OLD DATABASE ก่อน migrate
-- =========================================================

-- 1. ตรวจสอบจำนวน customers ที่ไม่มีเบอร์โทร
SELECT 
    COUNT(*) as total_customers_without_phone,
    'Customers without phone number' as description
FROM loan_customer 
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-');

-- 2. แสดงรายละเอียด customers ที่ไม่มีเบอร์
SELECT 
    id,
    customer_fullname,
    customer_phone,
    customer_email,
    customer_card_id,
    created_at
FROM loan_customer 
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-')
ORDER BY id
LIMIT 20;

-- =========================================================
-- 3. แก้ไขโดยสร้างเบอร์ dummy (10 หลัก)
-- =========================================================
-- ⚠️  ตรวจสอบให้แน่ใจว่า pattern นี้ไม่ซ้ำกับเบอร์จริง
-- Format: 0800000XXX (XXX = customer ID)

-- ตัวอย่าง:
-- Customer ID 1   → 0800000001
-- Customer ID 12  → 0800000012
-- Customer ID 123 → 0800000123

UPDATE loan_customer 
SET 
    customer_phone = CONCAT('0800000', LPAD(id, 3, '0')),
    updated_at = NOW()
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-');

-- 4. ตรวจสอบผลลัพธ์
SELECT 
    id,
    customer_fullname,
    customer_phone,
    'Updated' as status
FROM loan_customer 
WHERE deleted_at IS NULL 
  AND customer_phone LIKE '0800000%'
ORDER BY id
LIMIT 20;

-- 5. เช็คว่ามี customers ที่ไม่มีเบอร์เหลืออยู่ไหม
SELECT 
    COUNT(*) as remaining_without_phone
FROM loan_customer 
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-');

-- ควรได้ 0

-- =========================================================
-- Alternative: ถ้าต้องการใช้ pattern อื่น
-- =========================================================

-- Option 1: ใช้เลขบัตรประชาชน 3 ตัวท้าย (ถ้ามี)
/*
UPDATE loan_customer 
SET 
    customer_phone = CONCAT('080', RIGHT(customer_card_id, 7)),
    updated_at = NOW()
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-')
  AND customer_card_id IS NOT NULL
  AND LENGTH(customer_card_id) = 13;
*/

-- Option 2: ใช้ timestamp + random
/*
UPDATE loan_customer 
SET 
    customer_phone = CONCAT('081', UNIX_TIMESTAMP(created_at) % 10000000),
    updated_at = NOW()
WHERE deleted_at IS NULL 
  AND (customer_phone IS NULL OR customer_phone = '' OR customer_phone = '-');
*/

-- =========================================================
-- ตรวจสอบเบอร์ซ้ำ (ถ้ามี)
-- =========================================================

SELECT 
    customer_phone,
    COUNT(*) as count,
    GROUP_CONCAT(id ORDER BY id) as customer_ids
FROM loan_customer
WHERE deleted_at IS NULL
  AND customer_phone IS NOT NULL
GROUP BY customer_phone
HAVING count > 1
ORDER BY count DESC;

-- ถ้ามีเบอร์ซ้ำ ให้แก้ไขโดยเพิ่มเลขต่อท้าย:
/*
UPDATE loan_customer 
SET customer_phone = CONCAT(customer_phone, id % 10)
WHERE id IN (select duplicated customer IDs);
*/

