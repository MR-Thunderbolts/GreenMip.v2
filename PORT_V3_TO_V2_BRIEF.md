# Brief de implementación — Portar detalles visuales de V3 a V2

> **Para Claude Code (sesión corriendo en este repo `GreenMip.v2`).**
> **Base:** este repo (V2). **Referencia visual:** repo hermano `GreenMip.v3/greenmip-landing` (SvelteKit). Solo se copian *decisiones de estilo/layout* de V3; **no** se migra su arquitectura, ni su `+page.svelte` monolítico, ni la carpeta `factory/`.
> **Objetivo:** dejar V2 lo más parecido posible a V3 en los puntos listados, manteniendo el stack de V2 (Svelte 5 + Vite + Tailwind v4 + DaisyUI) y la estructura por componentes con contenido en `src/content/*`.

## Reglas / restricciones

- **No** agregar dependencias nuevas. Usar Tailwind + DaisyUI ya presentes.
- **No** tocar la lógica del formulario (`ContactForm.svelte` handleSubmit / WhatsApp) ni los archivos `src/content/*` salvo donde se indique (testimonios: comillas).
- Mantener el contenido/texto actual de V2 (es el mismo cliente).
- Trabajar en una rama nueva (ej. `feat/port-v3-visuals`).
- Al terminar: `npm run build` debe pasar limpio, y revisar responsive (móvil < 768px, tablet, desktop ≥ 1024px).
- Referencia de valores: los tokens de V3 usan `--gutter: clamp(20px, 5vw, 156px)`, `--radius-xl: 28px`, `--radius-lg: 20px`, `--space-12: 48px`, `--space-16: 64px`. Traducir a utilidades Tailwind equivalentes.

---

## 0. Sistema de grilla / contenedor (refactor base — hacer PRIMERO)

**Problema detectado:** V2 aplica en cada sección `px-4 md:px-12 lg:px-48` (192px de padding lateral) + splits `lg:col-span-7 / col-span-5` sobre grid de 12. Esto angosta el contenido y desalinea secciones. V3 en cambio centra todo en un contenedor de ancho fijo con gutter chico y usa grids balanceados de 2 columnas.

**V3 (referencia):**
```css
.section-container { width: 100%; max-width: 1200px; }   /* centrado con margin auto */
/* padding lateral vía --gutter: clamp(20px, 5vw, 156px) en la sección */
.problem-container / .profile-section  { grid-template-columns: 1fr 1fr; gap: 48px; }
.gps-container      { grid-template-columns: 1fr 1.2fr; }
.contact-container  { grid-template-columns: 1fr 1.5fr; gap: 64px; }
```

**Acción en V2:**
1. Crear un contenedor compartido reutilizable (componente `src/components/ui/Container.svelte` o clase util) que aplique: `w-full max-w-[1200px] mx-auto` + padding lateral `px-5 sm:px-8 lg:px-[clamp(20px,5vw,80px)]` (gutter tipo V3, **mucho menor que `lg:px-48`**).
2. Reemplazar en cada `<section>` de `src/components/sections/*` el patrón `px-4 md:px-12 lg:px-48` + `container mx-auto` por ese contenedor.
3. Convertir los bloques de 2 columnas de `grid-cols-12 + col-span-7/5` a **grids balanceados**: `lg:grid-cols-2` (Problema, Isaac Vera), y donde V3 usa proporción, `lg:grid-cols-[1fr_1.2fr]` (Servicios GPS) y `lg:grid-cols-[1fr_1.5fr]` (Contacto).
4. **Navbar:** subir el ancho a `max-w-[1200px]` (hoy `max-w-6xl` = 1152px) para que aproveche el mismo ancho horizontal que el resto (esto resuelve el "usa mejor el espacio horizontal" del navbar).

> Este paso es la causa raíz de por qué en V3 el navbar y la sección de Isaac Vera "ocupan mejor la pantalla". Hacerlo primero porque los puntos siguientes dependen del layout resultante.

---

## 1. Border radius del navbar
**Archivo:** `src/components/sections/Navbar.svelte` (línea ~22)
- Actual: `rounded-2xl` (16px).
- Target: `rounded-lg` (8px), como V3 (`.navbar { border-radius: 8px }`). Mantener la sombra suave existente.

## 2. Tamaño de iconos (sección "El problema")
**Archivo:** `src/components/sections/Problem.svelte` (línea ~52)
- Actual: `<Icon ... class="w-6 h-6 ...">` (24px).
- Target: **32px** → `w-8 h-8`, color olive/sage (V3: `.feature-icon-large { width:32px; height:32px; color:#838A68 }`).

## 3. Tipografía
- **Hero H1:** ya está en `36px / md:56px` (coincide con V3 `3.5rem`). No cambiar tamaño; opcional afinar `tracking` a ≈ `-0.02em`.
- **Headings de sección (Inter):** V3 usa `letter-spacing: -1px` y `line-height: 1.1`. Alinear los H2 de V2 (`Problem`, `HowItWorks`, `AboutTestimonials`, `ContactForm`) a ese tracking/line-height.
- **Nombres de clientes en testimonios:** ver punto 8.

## 4. Textura de fondo
**Archivos:** secciones con fondo oliva (`ServicesGPS.svelte`, `OtherServices.svelte`/`Advantages.svelte`) y `Footer.svelte`.
- V2 hoy: texturas SVG distintas horneadas por sección.
- V3: **una sola textura** `textura-hero-banner.svg` como capa absoluta encima del color, con `opacity`:
```css
.hero-bg { position:absolute; inset:0; background-size:cover; background-position:center;
           opacity:0.4; pointer-events:none; z-index:0; }
/* footer usa opacity:0.15 */
```
- **Acción:** el asset **ya está** en `public/assets/textura-hero-banner.svg`. Aplicar el patrón de overlay (`opacity 0.4` en secciones oliva, `0.15` en footer) referenciando `url('/assets/textura-hero-banner.svg')`. El contenido va en un wrapper con `position:relative; z-index:1`.

## 5. Posicionamiento de la imagen — sección "El problema"
**Archivo:** `src/components/sections/Problem.svelte` (imagen ~línea 35-43)
- Actual: `max-w-[460px]`, `aspect-[458/286]`, `rounded-2xl`, `shadow-lg`, **`border border-black/5`**.
- Target (V3): imagen más protagonista dentro del grid `1fr 1fr`, **sin borde**, `border-radius ≈ 28px` (`rounded-[28px]`), solo sombra. Quitar el `max-w` que la achica; que llene su columna.

## 6. Cards "Cómo funciona" — quitar borde y efecto
**Archivo:** `src/components/sections/HowItWorks.svelte` (~línea 24 y 48)
- Actual: cada paso envuelto en `<Card variant="bordered-soft" class="... p-6">` y la imagen con `border border-black/5`.
- Target (V3): **sin card, sin borde, sin fondo** — columna limpia (`.step-col` es solo `display:flex; flex-direction:column`). Contenido arriba, imagen abajo con `border-radius:16px` y sombra suave `box-shadow: 0 4px 20px rgba(0,0,0,0.05)`.
- **Acción:** eliminar el wrapper `Card` (o pasarlo a un `div` sin borde/padding/fondo), quitar `border` de la imagen, dejar `rounded-2xl` (16px) + la sombra suave indicada.

## 7. Sección Isaac Vera — foto y uso del espacio
**Archivo:** `src/components/sections/AboutTestimonials.svelte` (Row 1, ~línea 15-26)
- Actual: foto dentro de un **marco doble** (`border border-greenmip-forest/20 p-4 rounded-2xl` + `shadow-inner` interno).
- Target (V3): **imagen única**, `border-radius:24px` (`rounded-3xl`), borde sutil `1px #e5e7eb`, **sin marco/padding externo**. La imagen llena su columna.
- **Espacio:** al pasar esta sección al grid balanceado `lg:grid-cols-2` (punto 0), la foto y el texto ocupan mejor el ancho, como en V3. Verificar que la columna de la imagen no quede con `max-w` que la limite.

## 8. Testimonios "Que dicen mis clientes"
**Archivos:** `src/components/sections/AboutTestimonials.svelte` (Row 2) y `src/content/about.content.js` (textos).
- **Comillas:** el texto debe mostrar comillas de apertura **y** cierre (`"…"`). En V3 el texto viene con comillas literales. En V2, envolver el `{item.quote}` con comillas tipográficas (`&ldquo;`/`&rdquo;` o `"{item.quote}"`) o agregarlas en el contenido. Asegurar que abren y cierran.
- **Card testimonio (V3 ref):**
```css
.testimonio-card { background:#fff; border-radius:16px; border:1px solid #838A68; padding:32px;
                   display:flex; flex-direction:column; justify-content:space-between; }
.testimonio-card p { font-family:'Krub'; font-size:14px; color:#4b5563; line-height:1.6; }
```
- **Tipografía del autor (igualar a V3):**
```css
.testimonio-autor strong { font-family:'Inter'; font-weight:700; font-size:14px; color:#1a1f16; }  /* nombre */
.testimonio-autor span   { font-family:'Inter'; font-size:12px; color:#6b7280; line-height:1.4; }   /* cargo/ubicación */
```
  V2 hoy usa `font-krub` para el nombre (`cite`) — cambiar a **Inter 700 14px** para el nombre y **Inter 12px #6b7280** para el rol. Borde de card en sage `#838A68`, radius 16, padding 32.

## 9. Badges de contacto (WhatsApp / mail)
**Archivo:** `src/components/sections/ContactForm.svelte` (~línea 57 y 72)
- Actual: círculo `w-12 h-12 rounded-full` con **fondo verde** `bg-greenmip-bright/10` + icono de color.
- Target (V3): círculo **48px**, **fondo blanco**, borde `1px #e5e7eb` (neutro), icono a trazo oscuro 20px.
```css
.contact-icon-wrapper { width:48px; height:48px; border-radius:50%; border:1px solid #e5e7eb;
                        background:#fff; display:flex; align-items:center; justify-content:center; }
```

## 10. Certificación Ciclo17 (footer)
**Archivo:** `src/components/sections/Footer.svelte` (columna certificaciones, ~línea 60-86)
- **Portar de V3 solo el sello Ciclo17:** imagen `Certification Seal.svg` envuelta en link a `https://ciclo17.cl` (`target="_blank" rel="noopener noreferrer"`), tamaño `max-width:200px`.
- **MANTENER la versión V2 del footnote CO₂ / energía** (el sello inline `co2-seal-*` + `energy-footnote`). **No** portar el `Footnote Image.png` de V3.
- **Acción:** el sello **ya está** en `public/assets/certification-seal.svg`. Reemplazar/actualizar el `certificationImage` de V2 por este sello (`src="/assets/certification-seal.svg"`) linkeado a ciclo17.cl; dejar intacto el bloque del sello CO₂ de V2.

---

---

# PARTE B — Paridad DESKTOP (feedback visual)

> **Encuadre:** comparar **desktop ↔ desktop**. La versión **desktop de V3 está más trabajada** que su móvil; la versión **móvil de V2 está mejor** y se conserva. Por tanto: aplicar los cambios de arriba **y**, además, replicar el tratamiento **desktop** de V3 en los puntos siguientes, sin degradar el móvil de V2. Antes de cada cambio de estilo, buscar si ya existe una clase/token en V2 que sirva; si no, **crear un token/estilo reutilizable y justificar la decisión** (jerarquía, consistencia, marca).

## B0. Decisión de sistema — grises neutros y pesos (raíz de "los colores/textos se ven distintos")
Diferencia de fondo detectada en todo el sitio:
- **V3 usa grises NEUTROS:** ink `#1a1f16`, body `#6b7280`, body fuerte `#4b5563`, muted `#9ca3af`.
- **V2 usa grises con TINTE VERDE:** `greenmip-gray #6a7466`, `greenmip-olive`, etc.
- **V3 usa pesos más definidos** (700 en títulos/labels, 400–500 en body); V2 mezcla `font-semibold`/`font-medium`.

**Acción (hacer temprano, en `src/app.css` `@theme`):** agregar tokens neutros y usarlos en vez de los verdosos donde V3 los usa:
```
--color-ink:        #1a1f16;  /* títulos / texto principal */
--color-body:       #6b7280;  /* descripciones, body secundario */
--color-body-strong:#4b5563;  /* párrafos de card */
--color-muted:      #9ca3af;  /* labels, números "01", meta */
```
Luego, en la auditoría de cada sección, reemplazar `text-greenmip-olive` / `text-greenmip-gray` en **texto de cuerpo** por estos neutros según corresponda (V3), y **quedarnos con los pesos de V3** (ver tabla B11). Justificar: unifica la jerarquía y elimina el tinte verde inconsistente del cuerpo de texto.

## B1. Color de fondo base
- V3: `.landing-container { background:#365C48 }` (verde profundo detrás de todo) y secciones claras en **blanco puro `#ffffff`**.
- V2: base off-white `#fefffb` (`bg-greenmip-light-bg`) en `App.svelte` y secciones.
- **Acción:** comparar contra V3 desktop y alinear — evaluar pasar las secciones "claras" a `#ffffff` puro y/o la base de página a `#365C48`. Decidir y justificar (evitar el crema que no está en V3).

## B2. Botón "Contactar" en navbar desktop
- V3 mantiene el CTA visible a la derecha en desktop (`.nav-action .primary-btn`, ≥1024px).
- En **V2 desktop no se ve** el botón. **Acción:** asegurar que el CTA de `navbar-end` esté visible en desktop; revisar que `navbar-center hidden lg:flex` + `flex-nowrap` no lo estén desbordando/ocultando. Debe verse logo · links · **Contactar**.

## B3. Espaciado navbar ↔ hero
- V3 hero: `padding: 48px (top) / gutter / 96px (bottom)` + `html { scroll-padding-top:110px }`. Hay aire entre el navbar sticky y el contenido.
- V2: el hero arranca pegado al navbar. **Acción:** aumentar el padding-top del hero (y añadir `scroll-padding-top` global) para separarlo del navbar fijo, como V3.

## B4. Sección "El problema" — imagen (desktop)
- Reforzar el punto 5: la **imagen de la derecha escala mucho mejor en V3** (llena su columna en grid `1fr 1fr`). **Revisar cualquier `transform`/rotación no intencional** en la imagen de V2 ("se ve rodada"). Que escale y se posicione como V3.

## B5. "Cómo funciona" (desktop) — además de quitar borde/sombra (punto 6)
- **Color del body:** V3 `.desc-cf` y `.step-text` = **`#6b7280`** (Krub). V2 usa `text-greenmip-olive`. Cambiar a `--color-body`.
- **Orden en la card:** V3 pone el número **a la IZQUIERDA del título** (`.step-title-wrap { display:flex; gap:12px; align-items:flex-start }`). V2 lo tiene **arriba**. Cambiar a fila `[01] Título`.
- **Color/peso del "01":** V3 `.step-num-new` = Inter **16px / weight 500 / `#9ca3af`** (gris). V2 lo tiene bold/olive. Cambiar a gris muted 500.
- Referencia: `.step-h4` Inter 20px 700 `#1a1f16`; `.cf-tag` Inter 11px `#6b7280`, borde `#d1d5db`; `.title-cf` Inter 36→40px 700 -1px; `.eyebrow-cf` Inter 10px 700 `#365C48`.

## B6. "Otros servicios" — cards que se estiran (desktop)
**Causa en V2 (`OtherServices.svelte`):** el grid desktop usa `items-stretch` + las cards `min-h-[368px]` → se estiran y dejan espacio blanco feo cuando el texto es corto.
- **Acción:** quitar `items-stretch` y `min-h-[368px]`; que la card se ajuste al contenido (V3 `.otros-card` no fuerza altura). Estilo V3: `background:#fff; border-radius:16px; padding:32px 24px; gap:16px; box-shadow:0 10px 30px rgba(0,0,0,.1)`; `h3` Inter 20px 700 `#1a1f16`; `p` Krub 14px **500** `#4b5563`.

## B7. Asesor — label "CULTIVOS ATENDIDOS"
- V3 `.perfil-cultivos-header` = **Inter 10px / 700 / `#9ca3af` / uppercase / letter-spacing .05em** (label pequeño gris). V2 usa `text-greenmip-olive text-xs`.
- **Acción:** ¿existe ya un estilo de "section-label/eyebrow" reutilizable en V2? Si sí, usarlo; si no, **crear un estilo/clase de label** (Inter 10px 700 uppercase `--color-muted`) y aplicarlo aquí y en otros eyebrows para normalizar. Justificar como token "section-label".
- Pills de cultivo: V3 `.perfil-cultivo` Krub 12px **600** `#838A68`, borde `#d1d5db`, pill.

## B8. "Que dicen mis clientes" — grilla (desktop)
- Las cards **no aprovechan el ancho horizontal**. Con el contenedor 1200px (Parte 0) + grid `repeat(3,1fr)` (V3 `.testimonials-grid`) deben ocupar todo el ancho.
- **Acción:** aplicar grid full-width de 3 columnas. Combinar con el punto 8 (comillas de apertura/cierre + tipografía del autor Inter 700 14px `#1a1f16` / cargo Inter 12px `#6b7280`; borde de card sage `#838A68`).

## B9. "Nuestras ventajas" — cards (desktop)
Traer las 3 cards (+13 años, +1600 monitoreos, Cobertura IV–IX) al estilo V3:
- V3 `.ventajas-card`: `background:#fff; border-radius:16px; padding:32px 24px; box-shadow:0 10px 30px rgba(0,0,0,.1)`, **alineadas a la izquierda** (`text-left`, `align-items:flex-start`); `h3` Inter **20px 700** `#1a1f16`; `p` Krub 14px `#4b5563`.
- V2 hoy: cards **centradas**, `h3` 26px semibold, `items-stretch`. **Acción:** pasar a left-align, `h3` 20px 700, `p` 14px gris, quitar `items-stretch`.

## B10. Footer — subrayados y pesos (desktop)
- **Contacto:** los enlaces van **subrayados siempre** (V3 `.footer-links a.underline { text-decoration:underline; thickness:1px; offset:4px }`). V2 subraya solo en hover → hacerlo permanente en la columna de contacto.
- **Pesos:** V3 `.footer-heading` Inter **11px 700** uppercase; `.footer-links a` Krub **15px normal**; `.footer-cert-text` Krub **15px 500** `#cde673`; `.footer-desc` Krub 14px. Alinear los pesos de V2 a estos (hoy V2 usa `font-bold`/`font-medium`/`font-semibold` mezclados).

## B11. GLOBAL — quedarnos con los pesos tipográficos de V3
Auditar **todo** el proyecto y alinear pesos/colores a esta tabla (V3):

| Rol | Familia | Peso | Tamaño | Color |
|---|---|---|---|---|
| Eyebrow / label / footer-heading | Inter | **700** | 10–11px, uppercase, ls .05em | `--color-muted` o marca |
| Título de sección | Inter | **700** | 32–40px, ls -1px | `--color-ink` (o `#fff` en oliva) |
| Título de card | Inter | **700** | 20px | `--color-ink` |
| Descripción / body principal | Krub | **400** | 15–18px | `--color-body` `#6b7280` |
| Body de card | Krub | **500** | 14px | `--color-body-strong` `#4b5563` |
| Número/meta ("01") | Inter | **500** | 16px | `--color-muted` `#9ca3af` |
| Nav link (normal / activo) | Krub | **500 / 700** | ~14px | `--color-ink` |

Donde V2 use `font-semibold`/`font-medium` distinto a esto, cambiar al peso de V3. Justificar cada ajuste en el commit.

## Assets — YA COPIADOS ✅ (no hay que copiar nada)
Ya están en `public/assets/`, listos para referenciar como `/assets/…`:
- `public/assets/textura-hero-banner.svg` ✅ (para punto 4 — referenciar `url('/assets/textura-hero-banner.svg')`)
- `public/assets/certification-seal.svg` ✅ (para punto 10 — `src="/assets/certification-seal.svg"`)
- `Footnote Image.png` de V3 **NO** se copió a propósito — se mantiene el footnote CO₂ de V2.

## Criterios de aceptación / QA
- [ ] `npm run build` pasa sin errores.
- [ ] Navbar radius 8px y ancho hasta 1200px; se ve balanceado en desktop.
- [ ] Secciones alineadas al mismo contenedor (max-w 1200px, gutter chico); Isaac Vera y navbar aprovechan el ancho como en V3.
- [ ] Iconos "El problema" a 32px.
- [ ] Textura como overlay único con opacidad en secciones oliva + footer.
- [ ] Imagen "El problema" sin borde, radius ~28px, más grande.
- [ ] Cards "Cómo funciona" sin borde/efecto; imagen radius 16 + sombra suave.
- [ ] Foto Isaac Vera: imagen única radius 24, sin marco doble.
- [ ] Testimonios con comillas de apertura y cierre; nombre en Inter 700 14px, cargo Inter 12px #6b7280; borde sage.
- [ ] Badges contacto: fondo blanco, borde neutro, icono oscuro.
- [ ] Footer: sello Ciclo17 (link a ciclo17.cl) + footnote CO₂ de V2 intacto.

### QA desktop (Parte B)
- [ ] Tokens de gris neutro creados y aplicados en body (sin tinte verde donde V3 usa neutro).
- [ ] Fondo base / secciones blancas alineados a V3.
- [ ] Botón "Contactar" visible en navbar desktop.
- [ ] Aire entre navbar y hero como V3.
- [ ] Imagen "El problema" sin rotación rara y escalando como V3.
- [ ] "Cómo funciona": número "01" a la izquierda del título, en gris 500; body en `#6b7280`.
- [ ] "Otros servicios": cards NO se estiran (sin `min-h`/`items-stretch`), sin espacio blanco feo.
- [ ] "CULTIVOS ATENDIDOS": label normalizado (Inter 10px 700 muted).
- [ ] Testimonios: grid de 3 columnas ocupando el ancho completo.
- [ ] "Nuestras ventajas": cards left-align estilo V3 (h3 20px 700, p 14px gris).
- [ ] Footer: contacto subrayado siempre; pesos de heading/links/cert alineados a V3.
- [ ] Auditoría global de pesos tipográficos hecha (tabla B11).

- [ ] Revisión responsive final en móvil / tablet / desktop (no degradar el móvil de V2).
