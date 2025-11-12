import { v4 as uuidv4 } from 'uuid';

/**
 * ID Mapper - เก็บ mapping ระหว่าง Old ID (int) และ New UUID (string)
 */
class IdMapper {
  private maps: Map<string, Map<number, string>> = new Map();

  /**
   * สร้าง UUID ใหม่และเก็บ mapping
   */
  create(tableName: string, oldId: number): string {
    if (!this.maps.has(tableName)) {
      this.maps.set(tableName, new Map());
    }

    const tableMap = this.maps.get(tableName)!;
    
    if (tableMap.has(oldId)) {
      return tableMap.get(oldId)!;
    }

    const newId = uuidv4();
    tableMap.set(oldId, newId);
    return newId;
  }

  /**
   * ดึง UUID จาก old ID (ถ้าไม่มีจะ return null)
   */
  get(tableName: string, oldId: number | null | undefined): string | null {
    if (oldId === null || oldId === undefined) return null;
    
    const tableMap = this.maps.get(tableName);
    if (!tableMap) return null;

    return tableMap.get(oldId) || null;
  }

  /**
   * เช็คว่ามี mapping หรือไม่
   */
  has(tableName: string, oldId: number): boolean {
    const tableMap = this.maps.get(tableName);
    return tableMap ? tableMap.has(oldId) : false;
  }

  /**
   * ดึงจำนวน mappings ทั้งหมดของ table
   */
  count(tableName: string): number {
    const tableMap = this.maps.get(tableName);
    return tableMap ? tableMap.size : 0;
  }

  /**
   * แสดงสถิติทั้งหมด
   */
  getStats() {
    const stats: Record<string, number> = {};
    for (const [tableName, tableMap] of this.maps.entries()) {
      stats[tableName] = tableMap.size;
    }
    return stats;
  }

  /**
   * ล้าง mapping ทั้งหมด
   */
  clear() {
    this.maps.clear();
  }
}

export const idMapper = new IdMapper();

