import { Decimal } from '@prisma/client/runtime/library';

/**
 * แยกชื่อเต็มเป็น firstName และ lastName
 */
export function splitFullName(fullName: string | null | undefined): {
  firstName: string;
  lastName: string;
} {
  if (!fullName || fullName.trim() === '') {
    return { firstName: 'ไม่ระบุ', lastName: 'ชื่อ' };
  }

  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '-' };
  }

  const firstName = parts.slice(0, -1).join(' ');
  const lastName = parts[parts.length - 1];
  return { firstName, lastName };
}

/**
 * ตรวจสอบว่าเลขบัตรประชาชน 13 หลักถูกต้องหรือไม่
 */
export function validateIdCard(idCard: string | null | undefined): string | null {
  if (!idCard) return null;
  
  const cleaned = idCard.replace(/\D/g, '');
  if (cleaned.length !== 13) return null;
  
  return cleaned;
}

/**
 * สร้างเบอร์โทรศัพท์ที่ถูกต้อง (10 หลัก)
 */
export function normalizePhoneNumber(phone: string | null | undefined): string | null {
  if (!phone) return null;
  
  const cleaned = phone.replace(/\D/g, '');
  
  // ถ้าขึ้นต้นด้วย 66 ให้เอาออก และเติม 0
  if (cleaned.startsWith('66') && cleaned.length === 11) {
    return '0' + cleaned.substring(2);
  }
  
  // ถ้ามี 9 หลักให้เติม 0 ข้างหน้า
  if (cleaned.length === 9) {
    return '0' + cleaned;
  }
  
  // ถ้ามี 10 หลักให้ return เลย
  if (cleaned.length === 10) {
    return cleaned;
  }
  
  return null;
}

/**
 * แปลง loan_type (วิธีการจ่าย) จากระบบเก่า
 * Old: CASH = เงินสด, HIRE_PURCHASE = เช่าซื้อ
 * New: hirePurchase = true/false
 */
export function isHirePurchase(oldType: string): boolean {
  return oldType === 'HIRE_PURCHASE';
}

/**
 * แปลงสถานะ loan จากระบบเก่า
 * Old: ON_STATE, CLOSE_STATE, CANCEL_STATE
 * New: ACTIVE, COMPLETED, DEFAULTED, CANCELLED
 */
export function mapLoanStatus(oldStatus: string | null): 'ACTIVE' | 'COMPLETED' | 'DEFAULTED' | 'CANCELLED' {
  if (!oldStatus) return 'ACTIVE';
  
  const status = oldStatus.toUpperCase().trim();
  
  // Exact match first
  if (status === 'ON_STATE') {
    return 'ACTIVE';
  }
  
  if (status === 'CLOSE_STATE') {
    return 'COMPLETED';
  }
  
  if (status === 'CANCEL_STATE') {
    return 'CANCELLED';
  }
  
  // Fallback: check contains (for backward compatibility)
  if (status.includes('CLOSE') || status.includes('ปิด')) {
    return 'COMPLETED';
  }
  
  if (status.includes('CANCEL') || status.includes('ยกเลิก')) {
    return 'CANCELLED';
  }
  
  if (status.includes('DEFAULT') || status.includes('ค้าง')) {
    return 'DEFAULTED';
  }
  
  // Default
  return 'ACTIVE';
}

/**
 * แปลงประเภทการชำระเงิน
 */
export function mapPaymentMethod(oldMethod: string | null): 'CASH' | 'QR_CODE' | 'BARCODE' | 'INTERNET_BANKING' | 'BANK_TRANSFER' {
  if (!oldMethod) return 'CASH';
  
  const method = oldMethod.toLowerCase();
  
  if (method.includes('cash') || method.includes('เงินสด')) {
    return 'CASH';
  }
  
  if (method.includes('qr')) {
    return 'QR_CODE';
  }
  
  if (method.includes('barcode')) {
    return 'BARCODE';
  }
  
  if (method.includes('internet') || method.includes('online')) {
    return 'INTERNET_BANKING';
  }
  
  if (method.includes('transfer') || method.includes('โอน')) {
    return 'BANK_TRANSFER';
  }
  
  return 'CASH';
}

/**
 * แปลงค่า Decimal
 */
export function toDecimal(value: any): number {
  if (value === null || value === undefined) return 0;
  if (value instanceof Decimal) return value.toNumber();
  return Number(value) || 0;
}

/**
 * สร้าง reference number ที่ unique
 */
export function generateReferenceNumber(prefix: string, oldId: number): string {
  const timestamp = Date.now();
  return `${prefix}${timestamp}${oldId}`;
}

/**
 * Format date to ISO string
 */
export function toISODate(date: Date | string | null | undefined): Date | undefined {
  if (!date) return undefined;
  
  // Handle invalid dates like '0000-00-00', '0000-00-00 00:00:00'
  if (typeof date === 'string') {
    if (date.startsWith('0000-00-00') || date.includes('-00-') || date.endsWith('-00')) {
      return undefined;
    }
  }
  
  try {
    const parsedDate = new Date(date);
    // Check if date is valid
    if (isNaN(parsedDate.getTime())) {
      return undefined;
    }
    return parsedDate;
  } catch {
    return undefined;
  }
}

/**
 * คำนวณจำนวนวันที่ค้างชำระ
 */
export function calculateLateDays(dueDate: Date, paidDate: Date | null): number {
  if (!paidDate) {
    // ถ้ายังไม่ชำระ ใช้วันปัจจุบัน
    paidDate = new Date();
  }
  
  const diffTime = paidDate.getTime() - dueDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 0;
}

/**
 * Log with timestamp
 */
export function log(message: string, data?: any) {
  const timestamp = new Date().toISOString();
  if (data) {
    console.log(`[${timestamp}] ${message}`, data);
  } else {
    console.log(`[${timestamp}] ${message}`);
  }
}

/**
 * Error log
 */
export function logError(message: string, error: any) {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ❌ ${message}`, error);
}

/**
 * Success log
 */
export function logSuccess(message: string, count?: number) {
  const timestamp = new Date().toISOString();
  const countStr = count !== undefined ? ` (${count} records)` : '';
  console.log(`[${timestamp}] ✅ ${message}${countStr}`);
}

/**
 * Parse payment detail from setting_land_report_detail
 * Example: "ชำระสินเชื่อ LOA000011(งวดที่ 1)" → { loanCode: 'LOA000011', installmentNumber: 1, isClosing: false }
 * Example: "ชำระสินเชื่อ LOA000152(ชำระปิดสินเชื่อ)" → { loanCode: 'LOA000152', installmentNumber: null, isClosing: true }
 */
export function parsePaymentDetail(detail: string): {
  loanCode: string | null;
  installmentNumber: number | null;
  isClosing: boolean;
} {
  if (!detail) {
    return { loanCode: null, installmentNumber: null, isClosing: false };
  }

  // Extract loan code (pattern: LOA000XXX or similar)
  const loanCodeMatch = detail.match(/LOA\d+/);
  const loanCode = loanCodeMatch ? loanCodeMatch[0] : null;

  // Check if closing payment
  const isClosing = detail.includes('ชำระปิดสินเชื่อ') || 
                    detail.includes('ชำระทั้งหมด') ||
                    detail.includes('ปิดบัญชี');

  // Extract installment number (pattern: งวดที่ X)
  let installmentNumber: number | null = null;
  if (!isClosing) {
    const installmentMatch = detail.match(/งวดที่\s*(\d+)/);
    if (installmentMatch) {
      installmentNumber = parseInt(installmentMatch[1], 10);
    }
  }

  return { loanCode, installmentNumber, isClosing };
}

