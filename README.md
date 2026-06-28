# Chef Raquel Chang Kim — Web

Sitio web de la chef: clases de cocina coreana (presenciales y en línea), tienda
(mercadito) y panel interno de administración.

Implementa el sistema de diseño definido en Figma (paleta crema/terracota/verde,
tipografías Fraunces + Nunito + Caveat + Black Han Sans).

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** (tokens en `design-system/tailwind.preset.js` — única fuente de verdad)
- Fuentes vía `next/font/google`
- Datos hoy en JSON (`/data`); listos para migrar a **SQL** sin tocar las páginas

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros scripts: `npm run build` (producción), `npm start`, `npm run lint`.

## Estructura

```
chef-raquel-web/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # fuentes + <html>
│  │  ├─ globals.css             # capa base + clases .btn/.pill/.card/.field
│  │  ├─ page.tsx                # Home
│  │  ├─ clases/page.tsx         # Clases presenciales (calendario + catálogo 12)
│  │  ├─ clases/[slug]/page.tsx  # Detalle de clase (SSG por slug)
│  │  ├─ tienda/page.tsx         # Tienda (filtros por categoría)
│  │  ├─ checkout/page.tsx       # Checkout (carrito + pago manual)
│  │  └─ admin/page.tsx          # Panel interno (solo desktop)
│  ├─ components/                # Navbar, Footer, Marquee, ClassCard, ProductCard, TiendaClient
│  └─ lib/                       # types.ts, data.ts (acceso a datos + helpers de precio)
├─ data/                         # classes.sample.json, products.sample.json
├─ design-system/               # tokens (css/json) + preset de Tailwind + styleguide
├─ public/                      # /photos, /logos, /icons, /graphics (servidos por Next)
└─ REQUERIMIENTOS.txt           # requerimientos funcionales del proyecto
```

## Sistema de diseño (reglas)

- **Botones:** toda acción principal (Reservar, Agregar, Pagar, Pedir) usa
  **terracota** (`.btn-primary`). WhatsApp es la única excepción verde
  (`.btn-whatsapp`). Secundario = contorno (`.btn-secondary`).
- **Header y footer** son los mismos en todas las páginas públicas (`<Navbar/>`, `<Footer/>`).
- Colores/espaciados/tipografías salen de los tokens; no hardcodear hex.

## Datos y negocio

- **12 clases** (pueden crecer) en `data/classes.sample.json`. Cada clase tiene
  modalidad **en línea (USD 25)** y **presencial (₡35.000)**.
- **Clases presenciales:** en **Heredia** (algunas especiales en otras zonas).
  Cada fin de semana hay **4 clases** distintas (A/B/C/D · sáb y dom · 10am y 3pm),
  cupo máx. 10.
- **Acceso a clases en línea:** link privado de YouTube por correo, **3 meses**.
- **Pago (sin pasarela de tarjeta aún):** SINPE Móvil · transferencia colones/dólares ·
  PayPal. El cliente envía el **comprobante por WhatsApp**. Datos en el Checkout.

## Para el dev — siguientes pasos

1. **Base de datos (SQL):** reemplazar las funciones de `src/lib/data.ts`
   (misma firma) por queries. Las páginas no cambian.
2. **Panel interno (`/admin`):** conectar el CRUD (crear/editar/eliminar clases y
   productos, subir fotos) a la DB. Hoy la UI está lista, sin persistencia.
3. **Carrito:** hoy es estático (demo). Agregar estado global (Context/Zustand) y
   persistencia.
4. **Pagos:** integrar pasarela cuando se decida (Stripe/PayPal para MX/SV) — el
   flujo manual por WhatsApp ya está modelado como fallback.
5. **Imágenes pendientes:** las clases/productos sin foto muestran
   "FOTO PRÓXIMAMENTE"; reemplazar al recibir las imágenes reales.

## Contacto del negocio

- WhatsApp: +506 7010 8482 · Instagram/TikTok: @chefraquelchangkim
- SINPE: 7010-8482 · BAC 906518527 · IBAN CR65010200009065185277

---
Diseño y desarrollo por **Blank Studio**.
