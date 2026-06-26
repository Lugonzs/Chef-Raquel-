# Chef Raquel Chang Kim — Sitio web

Sitio web para **Chef Raquel Chang Kim**, chef coreana que ofrece clases de cocina (presenciales y en línea), kimchi artesanal, kits y merch. Diseñado por **Blank Studio**.

Este repositorio es el **paquete de handoff de diseño → desarrollo**: contiene los design tokens, assets, datos de ejemplo y la documentación necesaria para que el dev construya el sitio.

---

## 🎨 Diseño (Figma)

- **Archivo Figma:** https://www.figma.com/design/fqB3KIBt4wGvvHwDBmY9Yf/Raquel-Chang-Kim
- Incluye las 6 pantallas (desktop + mobile), el panel interno y el **Style Sheet** completo (colores, tipografía, botones con estados, inputs, badges, componentes, iconset).

---

## 🧱 Stack sugerido

- **Frontend:** React / Next.js
- **Estilos:** Tailwind (usar `design-system/tailwind.preset.js`) o CSS variables (`design-system/tokens.css`)
- **Base de datos:** SQL (PostgreSQL recomendado)
- **Deploy:** Vercel (natural para Next.js) + CDN

---

## 🗺️ Pantallas

| Pantalla | Descripción |
|---|---|
| **Home** | Hero, sobre Raquel, teasers de clases y tienda, redes, contacto, footer |
| **Clases presenciales** | Calendario del mes + 4 clases del finde (A/B/C/D) + catálogo de las 12 clases |
| **Tienda** | Buscador, filtros por categoría, clases en línea ($25), Kimchi / Kits / Merch, carrito |
| **Checkout** | Carrito (3 tipos de ítem) + datos del cliente + método de pago + comprobante por WhatsApp |
| **Detalle de clase** | Descripción real, modalidad (en línea / presencial), qué incluye, fechas |
| **Panel interno** (solo desktop) | La chef agrega / edita / elimina clases y productos (precio, fecha, cupos, ubicación, foto) |

---

## 💳 Modelo de pago (importante)

**No hay pasarela de tarjeta por ahora.** El flujo es manual:

1. El cliente elige método: **SINPE Móvil · Transferencia (colones/dólares) · PayPal**
2. Hace el pago y **envía el comprobante por WhatsApp** con su nombre y lo que compró
3. La chef confirma el cupo / acceso

**Datos bancarios:** SINPE `7010-8482` · Titular Raquel Chang Kim · BAC `906518527` · IBAN `CR65010200009065185277`

> Dejar la arquitectura lista para integrar Stripe/PayPal automático en una fase futura (compradores principales: México y El Salvador).

## 🎓 Acceso a clases en línea

Tras confirmar el pago, la chef envía por **correo** un link a un **video privado de YouTube** (no listado). **Acceso por 3 meses.** Incluye recetario digital.

---

## 💰 Precios

- **Clase presencial:** ₡35.000 (~$68) — en **Heredia** (a veces zonas especiales que la chef define)
- **Clase en línea:** **USD $25** (~₡12.600 vía SINPE)

---

## 📂 Estructura del repo

```
chef-raquel-web/
├── README.md                  ← este archivo
├── REQUERIMIENTOS.txt         ← requerimientos completos del proyecto
├── STYLEGUIDE.md              ← sistema de diseño documentado
├── design-system/
│   ├── tokens.css            ← CSS custom properties (colores, fuentes, spacing, radios)
│   ├── tokens.json           ← tokens en JSON
│   ├── tailwind.preset.js    ← preset de Tailwind con la marca
│   └── fonts.html            ← importación de Google Fonts (+ snippet next/font)
├── assets/
│   ├── logos/                ← logo.svg (nav), footer.svg (footer), icono.svg
│   ├── graphics/             ← elementos botánicos + ilustraciones de la chef (SVG)
│   ├── icons/                ← iconset (SVG, estilo línea)
│   └── photos/
│       ├── dishes/           ← 8 fotos de platos
│       └── merch/            ← 3 diseños de tote bag
└── data/
    ├── classes.sample.json   ← datos de ejemplo de las 12 clases + horarios
    └── products.sample.json  ← datos de ejemplo de la tienda
```

---

## 🔤 Tipografía

- **Fraunces** (display, 600/900) — titulares
- **Nunito** (400/600/700/800) — cuerpo y UI
- **Caveat** (700) — acentos manuscritos
- **Black Han Sans** — texto coreano

Importación en `design-system/fonts.html`.

---

## ✅ Pendientes de contenido (la clienta los provee)

- Fotos reales de los platos sin foto (Dakgangjeong, Sundubu, Pajeon, Hotteok)
- Número real de seguidores IG/TikTok (placeholders en el diseño)
- Foto del kit de especias

**Redes:** Instagram [@chefraquelchangkim](https://www.instagram.com/chefraquelchangkim/) · TikTok [@chefraquelchangkim](https://www.tiktok.com/@chefraquelchangkim) · WhatsApp +506 7010 8482

---

🤖 Handoff preparado con [Claude Code](https://claude.com/claude-code) · Diseño por Blank Studio
