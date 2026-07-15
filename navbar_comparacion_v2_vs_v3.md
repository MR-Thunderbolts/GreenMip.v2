# Navbar: Comparación v2 (actual) vs v3 (aprobada)

> Foco principal: traer el **efecto de scroll** (`isScrolled`) de v3 a v2.

---

## 🎯 Lo que falta en v2 (resumen ejecutivo)

v2 **no tiene ningún listener de scroll**. El navbar actual es visualmente estático:
siempre el mismo padding, mismo fondo sólido, misma sombra, sin importar si el
usuario está arriba o ha bajado la página.

En v3, al pasar `scrollY > 20px`, ocurren 4 cambios simultáneos con transición de 300ms:

1. El wrapper reduce su padding (se "achica" hacia arriba)
2. El fondo pasa de sólido a semitransparente
3. Aparece `backdrop-filter: blur(8px)` (efecto glassmorphism)
4. La sombra se intensifica

**Nada de esto existe hoy en v2.**

---

## 📊 Tabla comparativa

| Feature | v3 (aprobada) | v2 (actual) | Estado |
|---|---|---|---|
| Scroll listener (`scrollY > 20`) | ✅ `onMount` + `addEventListener('scroll')` | ❌ No existe | **Falta** |
| Estado `isScrolled` | ✅ `$state(false)` reactivo | ❌ No existe | **Falta** |
| Padding wrapper reduce en scroll | ✅ 24px → 8px | ❌ Fijo (`top-3`, sin cambio) | **Falta** |
| Fondo semitransparente en scroll | ✅ `rgba(242,244,242,0.95)` | ❌ Siempre `bg-white` sólido | **Falta** |
| `backdrop-filter: blur(8px)` | ✅ Sí | ❌ No | **Falta** |
| Sombra más intensa en scroll | ✅ `0 10px 30px .1` → `0 15px 40px .15` | ❌ `shadow-lg` fijo | **Falta** |
| `transition: all 0.3s ease` | ✅ Sí | ⚠️ Parcial (`transition-all duration-300` ya está en el div, pero no cambia nada porque no hay estado `isScrolled`) | **Preparado, sin lógica** |
| IntersectionObserver / sección activa | ✅ Automático por scroll (`rootMargin: -20% 0px -60% 0px`) | ⚠️ Manual: solo cambia al hacer click en un link (`activeSection` se setea en `setActive()`) | **Diferente enfoque** |
| Dot verde en link activo | ✅ Sí (`.dot`, condicional) | ✅ Sí (`/assets/dot-active.svg`, condicional) | OK, ya existe |
| Link activo en bold | ✅ `font-weight: 700` | ✅ `font-bold` | OK, ya existe |
| Hover color verde neón | ✅ `#83FC88` | ⚠️ Usa `text-ink/80`, no verifica el color exacto de acento | Revisar |
| Logo clickeable → scroll to top | ✅ `scrollToTop()` | ⚠️ Hace `setActive('hero')` (scroll a sección `#hero`, no necesariamente top absoluto) | Similar, revisar diferencia |
| Links ocultos en mobile | ✅ `< 1024px` | ✅ `lg:hidden` para hamburguesa, `hidden lg:flex` para links | OK, ya existe |
| Menú hamburguesa mobile | ❌ No existe en v3 | ✅ Sí existe en v2 (mejora extra de v2) | v2 tiene algo que v3 no tiene |
| `scroll-padding-top` global | ✅ 110px | ❓ No verificado en `app.css` | Revisar |
| `scroll-behavior: smooth` global | ✅ Sí | ⚠️ v2 usa `scrollIntoView({ behavior: 'smooth' })` por JS en vez de CSS global | Funcionalmente similar |
| Stack técnico | Svelte + CSS puro (clases custom) | Svelte + Tailwind + DaisyUI (`btn`, `navbar-start`, etc.) | Diferente, hay que traducir clases |

---

## 🔧 Qué implementar en v2 (plan concreto)

### 1. Agregar estado y listener de scroll

En [Navbar.svelte](src/components/sections/Navbar.svelte), agregar junto a `activeSection` y `mobileMenuOpen`:

```js
import { onMount } from 'svelte';

let isScrolled = $state(false);

onMount(() => {
  const handleScroll = () => {
    isScrolled = window.scrollY > 20;
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
});
```

### 2. Aplicar clases condicionales en el wrapper y el navbar

Hoy (línea 21-22):
```svelte
<div class="fixed top-3 inset-x-0 z-50 px-3 md:px-8">
  <div class="navbar bg-white shadow-lg rounded-lg px-4 md:px-8 py-2 max-w-[1200px] mx-auto transition-all duration-300 flex-nowrap justify-between gap-3">
```

Cambiar a algo como:
```svelte
<div class="fixed inset-x-0 z-50 px-3 md:px-8 transition-[padding] duration-300 {isScrolled ? 'top-1 md:pt-2' : 'top-3'}">
  <div class="navbar rounded-lg px-4 md:px-8 py-2 max-w-[1200px] mx-auto transition-all duration-300 flex-nowrap justify-between gap-3
    {isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-xl' : 'bg-white shadow-lg'}">
```

> Nota: Tailwind ya trae `backdrop-blur-sm` (4px) y `backdrop-blur` (8px, equivalente al `blur(8px)` de v3). Usar `backdrop-blur` para igualar el valor exacto de v3.

### 3. Decidir si se porta el IntersectionObserver

v2 actualmente solo actualiza `activeSection` al hacer click en un link — no reacciona
al scroll manual del usuario por la página. Si quieres el mismo comportamiento "sección
activa según lo que se está viendo" de v3, hay que agregar el `IntersectionObserver`
con `rootMargin: '-20% 0px -60% 0px'` sobre las secciones con esos IDs. **Esto es
una decisión aparte del efecto de scroll del navbar** — se puede portar solo el
efecto visual (`isScrolled`) sin tocar la lógica de `activeSection`, o portar ambos.

### 4. Revisar `scroll-padding-top`

Verificar en [app.css](src/app.css) si existe `scroll-padding-top`. Si no, agregarlo
para que las secciones no queden tapadas por el navbar fijo al hacer scroll a un ancla.

---

## ⚠️ Puntos a decidir contigo

- ¿Quieres portar **solo el efecto de scroll visual** (`isScrolled`) o **también** el
  `IntersectionObserver` que cambia `activeSection` automáticamente al scrollear
  (hoy en v2 solo cambia con click)?
- v2 usa Tailwind/DaisyUI, v3 usa CSS puro con valores hardcodeados (`#F2F4F2`,
  `rgba(242,244,242,0.95)`). ¿Mantenemos los colores actuales de v2 (`bg-white`) o
  copiamos exactamente los grises de v3?
- El menú hamburguesa mobile de v2 no existe en v3 — se mantiene tal cual, no hay
  conflicto con el efecto de scroll.

---

*Comparación generada a partir de `navbar_desglose_v3.md`, `src/components/sections/Navbar.svelte`,
`src/content/navbar.content.js` y `src/lib/scroll.js` del repositorio actual (v2).*
