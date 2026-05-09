import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import * as schema from "../drizzle/offline-schema";

// NOT: openDatabaseSync modül seviyesinde çağrılmamalı — JS thread'ini bloke eder
// ve React render başlamadan önce splash screen'i dondurur.
// Bunun yerine initOfflineDb() içinde lazy başlatılıyor.

let _db: ReturnType<typeof drizzle> | null = null;

/**
 * Offline veritabanını döndürür.
 * initOfflineDb() çağrılmadan önce kullanılırsa hata fırlatır.
 */
export function getDb(): ReturnType<typeof drizzle> {
  if (!_db) {
    throw new Error("[OfflineDB] DB henüz başlatılmadı. initOfflineDb() önce çağrılmalı.");
  }
  return _db;
}

/**
 * SQLite veritabanını başlatır. _layout.tsx useEffect içinde çağrılmalı —
 * asla modül seviyesinde değil.
 */
export async function initOfflineDb(): Promise<void> {
  if (_db) return; // zaten başlatılmışsa tekrar açma
  try {
    const expoDb = openDatabaseSync("study_app.db");
    _db = drizzle(expoDb, { schema });
    console.log("[OfflineDB] Başlatıldı");
  } catch (err) {
    console.error("[OfflineDB] Başlatma hatası:", err);
    throw err;
  }
}
