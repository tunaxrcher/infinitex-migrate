-- ตรวจสอบค่า loan_status ที่มีจริงในฐานข้อมูล
SELECT 
    loan_status,
    COUNT(*) as count
FROM loan
WHERE deleted_at IS NULL
GROUP BY loan_status
ORDER BY count DESC;

-- ตรวจสอบตัวอย่างของแต่ละ status
SELECT 
    id,
    loan_code,
    loan_customer,
    loan_status,
    loan_summary_no_vat,
    created_at
FROM loan
WHERE deleted_at IS NULL
ORDER BY loan_status, id
LIMIT 50;

