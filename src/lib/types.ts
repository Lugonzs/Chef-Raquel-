export interface CookingClass {
  id: number;
  slug: string;
  name: string;
  name_ko: string;
  description?: string;
  why_learn?: string[];
  includes?: string[];
  level: "Principiante" | "Intermedio" | "Avanzado" | string;
  duration_min?: number;
  price_online_usd: number;
  price_presencial_crc: number;
  /** Nombre de archivo dentro de /public/photos/dishes, o null si aún no hay foto */
  photo: string | null;
  available_online: boolean;
  available_presencial: boolean;
  location: string;
}

export interface ScheduleSlot {
  code: "A" | "B" | "C" | "D" | string;
  day: string;
  time: string;
}

export interface PresencialSchedule {
  slots: ScheduleSlot[];
  max_capacity: number;
}

export type ProductCategory = "kimchi" | "kits" | "merch";

export interface Product {
  id: number;
  category: ProductCategory | string;
  name: string;
  desc: string;
  price_crc: number;
  /** Ruta relativa dentro de /public/photos, o null si aún no hay foto */
  photo: string | null;
  badge: string | null;
}

/** Item del carrito (clase presencial, clase en línea o producto). */
export interface CartItem {
  kind: "presencial" | "online" | "product";
  refId: number;
  name: string;
  badge: string;
  /** Monto unitario en la moneda nativa del item */
  amount: number;
  currency: "CRC" | "USD";
  qty: number;
  photo: string | null;
  meta?: string;
}
