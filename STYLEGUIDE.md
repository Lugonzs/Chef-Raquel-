# Style Guide — Chef Raquel

Sistema de diseño. Para la versión visual completa, ver el Style Sheet en Figma.

## Color

| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FFF0D1` | Fondo principal |
| `terracotta` | `#DC7739` | Acento · acciones primarias |
| `green-dark` | `#035541` | Secciones · footer |
| `green-light` | `#E0E699` | Highlight · tags · cupos disponibles |
| `brown` | `#5C2C15` | Titulares · texto sobre claro |
| `white` | `#FFFFFF` | Tarjetas · superficies |
| `error` | `#C0392B` | Cupo lleno · errores |
| `whatsapp` | `#25D366` | Único botón verde permitido |
| `ink` | `#2C2C2C` | Cuerpo de texto |

## Tipografía

| Rol | Fuente | Tamaño (desktop → mobile) |
|---|---|---|
| H1 | Fraunces Black | 60–72 / 96% → 40–44 |
| H2 | Fraunces Black | 44–52 / 110% → 30–34 |
| H3 | Fraunces SemiBold | 28–34 / 115% → 18–22 |
| Cuerpo | Nunito Regular | 16–18 / 160% → 15–16 |
| Caption | Nunito Bold | 12–13 · +1.5px · MAYÚS |
| Acento | Caveat Bold | 30–42 (solo acentos) |
| Coreano | Black Han Sans | — |

## Botones — estados

Estructura: pill (radio 999), texto Nunito Bold 15px, padding 14×26 (md) · 12×22 (sm) · 18×34 (lg).

| Estilo | Default | Hover | Pressed | Disabled |
|---|---|---|---|---|
| **Primario** | bg `#DC7739` | `#C66B33` | `#B05F2E` | opacidad 40% |
| **Secundario** | contorno terracota | relleno terracota 8% | contorno `#B05F2E` | gris 50% |
| **WhatsApp** | bg `#25D366` | `#1FB357` | `#199447` | opacidad 40% |
| **Enlace texto** | terracota | + subrayado | `#B05F2E` + subrayado | gris 50% |

**Regla:** toda acción principal (Reservar · Agregar · Pagar · Pedir) usa **terracota**. WhatsApp es la única excepción verde.

## Inputs

- bg `cream`, borde `#E0D2AE` 1px, radio 12px, padding 14×16, Nunito 15px.
- **Focus:** borde terracota 2px · **Error:** borde `#C0392B` + mensaje rojo · **Disabled:** opacidad 50%.

## Badges

- Categoría: PRESENCIAL (terracota) · EN LÍNEA (verde osc.) · PRODUCTO (café)
- Estado: MÁS VENDIDO (terracota) · "X lugares" (verde claro) · Lleno (rojo) · FOTO PRÓXIMAMENTE (verde claro)
- Decorativas coreanas (footer): 한국음식 · 맛있다 · 사랑해요 · 감사합니다

## Tokens

- **Radios:** 8 / 16 / 24 / 28 / 999 (pill)
- **Espaciado (8-pt):** 8 / 16 / 24 / 40 / 64 / 96
- **Sombra de tarjeta:** `0 8px 30px rgba(92,44,21,0.08)`

## Iconset

Estilo línea, grosor 2px, esquinas redondeadas, color `#5C2C15` (o crema sobre fondo oscuro). Tamaños 18 / 22 / 26px. Ver `assets/icons/`.
