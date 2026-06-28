import classesJson from "@data/classes.sample.json";
import productsJson from "@data/products.sample.json";
import type {
  CookingClass,
  PresencialSchedule,
  Product,
} from "./types";

/**
 * Capa de acceso a datos.
 *
 * Hoy lee de los JSON de ejemplo en /data. Cuando se conecte la base de datos
 * SQL + el panel interno, basta con reemplazar estas funciones por queries
 * (la firma se mantiene y las páginas no cambian).
 */

export const classes = (classesJson.classes as CookingClass[]);
export const presencialSchedule = (classesJson.presencial_schedule as PresencialSchedule);
export const products = (productsJson.products as Product[]);
export const productCategories = (productsJson.categories as string[]);

export function getClassBySlug(slug: string): CookingClass | undefined {
  return classes.find((c) => c.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

/** Las 4 clases del fin de semana en curso (A/B/C/D). Demo: primeras 4 + cupos. */
export interface WeekendClass {
  slot: PresencialSchedule["slots"][number];
  cls: CookingClass;
  spotsLeft: number;
  dateLabel: string;
}

export function getWeekendClasses(): WeekendClass[] {
  const spots = [7, 0, 5, 9];
  const dates = ["Sáb 4 Jul", "Sáb 4 Jul", "Dom 5 Jul", "Dom 5 Jul"];
  return presencialSchedule.slots.map((slot, i) => ({
    slot,
    cls: classes[i],
    spotsLeft: spots[i] ?? 10,
    dateLabel: dates[i] ?? "",
  }));
}

// ---- Helpers de precio ----
const crcFmt = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
  maximumFractionDigits: 0,
});

export function formatCRC(n: number): string {
  // Intl da "₡1,234"; preferimos punto de miles a la tica.
  return "₡" + n.toLocaleString("es-CR");
}

export function formatUSD(n: number): string {
  return "$" + n;
}

/** Foto de un platillo dentro de /public/photos/dishes, con fallback. */
export function dishPhoto(photo: string | null): string | null {
  return photo ? `/photos/dishes/${photo}` : null;
}

/** Foto de un producto (puede venir con subcarpeta, ej "merch/..."). */
export function productPhoto(photo: string | null): string | null {
  return photo ? `/photos/${photo}` : null;
}
