# Ambigüedades de diseño — Port V3 → V2 (revisar antes de mergear)

> Generado automáticamente tras aplicar `PORT_V3_TO_V2_BRIEF.md` con un batch de agentes (uno por archivo, en paralelo) en la rama `feat/port-v3-visuals`. `npm run build` pasó limpio, y se hizo una revisión visual real en navegador (Playwright) en 3 breakpoints. Cada punto abajo es una decisión que el brief no especificaba al 100% y que un agente resolvió por criterio propio — revísalas y ajusta lo que no te convenza. **La sección "⚠️ Hallazgo (no es ambigüedad)" es un bug real encontrado en QA visual, no una decisión de diseño.**

## ⚠️ Hallazgo de QA visual (bug real, no ambigüedad)

- **`public/assets/certification-seal.svg` es en realidad una copia del sello de CO₂**, no el sello oficial de Ciclo17. Al renderizarlo standalone se ve idéntico al badge "0.3g de CO₂ por visita / Sitio web de bajo impacto ambiental" — por eso en el footer aparecen **dos badges iguales** en vez de un sello Ciclo17 distinto + el badge CO2. Este asset venía pre-copiado desde antes de este batch (commit "baseline"), el código de `Footer.svelte` (punto 10) está implementado correctamente (link a ciclo17.cl, target blank, max-width 200px) — el problema es el **contenido del SVG en sí**, no el código. **Necesitas reemplazar `public/assets/certification-seal.svg` por el sello real de Ciclo17 (distinto del ícono de CO2).**
- Además, de paso se corrigió un bug menor de CLS (layout shift): el `<img>` del sello no reservaba espacio (`h-auto` sin `aspect-ratio`), por lo que colapsaba a 0px de alto antes de cargar. Se agregó `aspect-[213/68]` al wrapper — esto ya está corregido en el commit.

## Navbar.svelte
1. **Menú móvil (hamburger) no se tocó.** Se aplicó Krub/Inter + color `text-ink` a los links de desktop, pero el dropdown móvil se dejó con `text-greenmip-forest`/`font-semibold` porque el brief hablaba de "nav links" sin distinguir mobile/desktop y el foco explícito (B2) era el CTA de desktop. **Revisar si quieres el mismo tratamiento en el menú móvil.**
2. **Fix del overflow del CTA en desktop:** causa raíz identificada = DaisyUI aplica `width:50%` a `.navbar-start`/`.navbar-end` por defecto, lo que desbordaba `.navbar-center`. Solución: `w-auto` en start/end + `flex-1 justify-center` en center. No se tocó `flex-nowrap`. **Confirmar visualmente que logo·links·Contactar se ven bien en distintos anchos de desktop.**

## Problem.svelte
3. **H3 y body de las cards de "pain points" no eran un punto explícito del brief**, pero se ajustaron a la tabla global (h3 → Inter 700 20px ink; body → text-body) para consistencia. **Revisar si esto se veía bien antes y si el cambio es deseado.**
4. **Gap del grid en mobile:** se dejó `gap-8` (no especificado por el brief, que solo daba el valor desktop de 48px/gap-12).

## HowItWorks.svelte
5. **Eyebrow de sección:** se reemplazó el componente `<Tag variant="forest">` (badge con fondo) por un `<span>` de texto plano Inter 10px/700 sin fondo, porque el estilo tipográfico exacto que pide el brief no encaja con un chip. **Confirmar que se prefiere texto plano sobre badge.**
6. **`cf-tag` / componente `Tag.svelte` de cada paso NO se tocó** — pertenece a un componente compartido fuera del archivo asignado a este agente; ningún otro agente lo cubrió tampoco. **Pendiente si se quiere aplicar el estilo `cf-tag` (Inter 11px, color body, borde #d1d5db).**
7. Fila número+título usa `items-start` literal como pide el brief; puede verse con leve desalineación vertical entre el número (16px) y el título (20px) — revisar visualmente.

## AboutTestimonials.svelte
8. **No existe una clase reutilizable "eyebrow/section-label"** en el proyecto — el label "CULTIVOS ATENDIDOS" quedó con clases inline replicando el patrón ya usado en HowItWorks. Candidato a extraer como `.eyebrow-muted` en `app.css` si se reutiliza en más lugares (esto es justamente el B7 del brief: "crear un token/estilo reutilizable y justificar la decisión").
9. **Pills de cultivo:** se dejó de usar el componente `Tag` (`kind='chip'`) porque sus variantes existentes no permiten el combo borde-gris-300 + texto-sage + peso-600 sin editar `Tag.svelte` (fuera del archivo asignado). Se usó un `<span>` con clases propias en su lugar. **Si se prefiere mantener todo vía el componente `Tag`, habría que agregarle una variante nueva.**
10. **Borde sage en card de testimonio:** se cambió `Card variant="bordered"` a `variant="flat"` + clase local `border border-greenmip-sage` en vez de agregar una variante nueva a `Card.svelte`. Funciona pero es un patrón "override por fuera" en vez de una variante propia del componente.
11. **No fue necesario tocar `about.content.js`** para las comillas — el agente verificó que el texto no traía comillas embebidas, así que las comillas tipográficas (`&ldquo;`/`&rdquo;`) se agregaron solo en el componente.

## ContactForm.svelte
12. **Icono de WhatsApp no se recoloreó** — es un `<img>` externo (`/assets/whatsapp-icon.svg`), no un componente `Icon` inline, así que `text-ink` no le afecta. El badge de correo sí quedó con icono oscuro. **Si se quiere el mismo trazo oscuro en WhatsApp, hay que editar el SVG del asset o cambiarlo a un ícono inline — fuera del alcance de "solo estilos".**
13. Borde neutro de badges usó el valor arbitrario `border-[#e5e7eb]` literal (no hay token equivalente en `app.css`).

## ServicesGPS.svelte
14. **Se removió el padding horizontal (`px-4 md:px-12 lg:px-48`) del `<section>`** para no duplicarlo con el que ya aporta `Container` — interpretación de que "no tocar el section" se refería a fondo/id/padding vertical, no al padding horizontal que el brief pedía reemplazar explícitamente en el paso 0.
15. **Las 3 imágenes SVG decorativas previas** (`services-bg-group.svg`, `services-bg-group1.svg`, `services-bg-container.svg`) se eliminaron por completo y se sustituyeron solo por la textura overlay única. Si alguna de esas imágenes tenía contenido decorativo relevante (no solo textura), se perdió — **revisar visualmente esta sección con atención.**

## OtherServices.svelte / Advantages.svelte
16. **Solo `OtherServices.svelte` tenía textura de fondo** (`other-services-bg.svg`); `Advantages.svelte` no tenía ninguna, así que no se le agregó overlay — se interpretó que el brief solo aplicaba a la que calificara.
17. Se quitó `max-w-[280px] mx-auto` del párrafo de las cards de `Advantages.svelte` al pasar de centrado a alineado a la izquierda (no mencionado explícitamente en el brief, pero necesario visualmente).
18. **Inconsistencia entre secciones:** en `ServicesGPS.svelte` se quitó el padding horizontal del `<section>` (punto 14), pero en `OtherServices.svelte`/`Advantages.svelte` se dejó intacto (`px-4 md:px-12 lg:px-48`) siguiendo la letra literal del brief de "no tocar el section". **Esto es una inconsistencia entre agentes — revisar y unificar el criterio** (probablemente ambas deberían quitar el padding horizontal duplicado).

## Footer.svelte
19. **Color `#cde673`** (footer-cert-text) no tenía token existente — se usó `text-[#cde673]` arbitrario.
20. **Peso de `footer-desc`:** la tabla del brief no definía un rol para este texto; se usó `font-normal` (400) como decisión de interpretación (el valor previo era `font-medium`).
21. **Tamaño de links de nav/contacto:** se bajó de `text-base` (16px, valor previo de V2) a `text-[15px]` siguiendo literalmente la tabla del brief.

## Hero.svelte
22. **No se aplicó el componente `Container`** — el hero usa `lg:container lg:mx-auto lg:px-12` (utilidad nativa de Tailwind) con la imagen full-bleed en mobile; el agente decidió no forzar el `Container` compartido para no romper ese comportamiento intencional. **Esto significa que el Hero queda con un ancho máximo potencialmente distinto a los 1200px del resto de las secciones — revisar si se ve desalineado contra el navbar/otras secciones.**
23. **`pt-24 md:pt-32`** para el espaciado bajo el navbar es una aproximación visual (navbar fixed ≈ 68px de alto), no un valor derivado 1:1 de V3 (que no tiene navbar fixed). **Revisar visualmente el aire resultante.**

## Global / cross-cutting
24. **Componentes compartidos NO tocados:** `Tag.svelte` y `Card.svelte` quedaron sin nuevas variantes pese a que varias secciones necesitaban estilos que esos componentes no soportaban limpiamente (ambigüedades 6, 9, 10). Varias secciones terminaron con overrides locales en vez de variantes de componente — **si se quiere una solución más limpia, valdría la pena agregar variantes a `Tag`/`Card` en una pasada de refactor posterior.**
25. **No existe todavía una clase `.eyebrow`/`.section-label` reutilizable en `app.css`** pese a que el brief (B7) sugería crearla — quedó como estilo inline duplicado en 2 secciones (HowItWorks, AboutTestimonials). Candidato a extraer.

## Pendiente de verificación manual (no lo hizo el batch)
- Revisión responsive real en navegador (móvil <768px, tablet, desktop ≥1024px) — el batch solo verificó que `npm run build` pasa, no verificó visualmente el layout.
- Checklist de aceptación del brief (secciones "Criterios de aceptación / QA" y "QA desktop Parte B") — pendiente de repaso visual punto por punto.
