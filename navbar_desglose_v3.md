# Navbar GreenMip v3 — Desglose Técnico Completo

> **Propósito de este documento:** Guía de referencia para comparar e implementar las funcionalidades y estilos del navbar de la versión aprobada (v3 / greenmip-landing) en el repositorio actual (v2).

---

## 📁 Arquitectura de Archivos

El navbar en v3 está dividido en **dos capas**:

| Capa | Rol |
|---|---|
| **Factory** (`factory/src/lib/components/navbar/`) | Componentes genéricos y reutilizables. Base UI sin lógica de negocio. |
| **Ensamblado Cliente** (`src/routes/+page.svelte`) | Aquí vive **toda la lógica real**: scroll tracking, active section, clases reactivas. |

### Archivos del sistema Navbar

```
factory/src/lib/components/navbar/
├── index.ts          → Re-exports: Root, Brand, Links, Actions, Navbar
├── NavbarRoot.svelte → Contenedor <nav> sticky, transición base
├── NavbarBrand.svelte→ Logo + brand name
├── NavbarLinks.svelte→ Links centrados, variante flat/pill
└── NavbarActions.svelte → Slot derecho para botones/CTAs
```

> **⚠️ Nota importante:** En la implementación final del cliente (`+page.svelte`), el navbar **no usa los componentes de la factory** directamente — está escrito inline en HTML/CSS puro dentro de la página, usando las clases y tokens de `tokens.css`. Los componentes de la factory son la base genérica pero el cliente implementó su propia versión con toda la lógica reactiva.

---

## 🏗️ Estructura HTML del Navbar (Versión Cliente / Implementación Real)

```svelte
<div class="nav-wrapper {isScrolled ? 'scrolled' : ''}">
  <header class="navbar {isScrolled ? 'scrolled' : ''}">

    <!-- LOGO -->
    <div class="nav-logo"
      onclick={scrollToTop}
      onkeydown={e => e.key === 'Enter' && scrollToTop()}
      style="cursor: pointer;"
      tabindex="0"
      role="button"
    >
      <img src="/Logo GreenMIP.svg" alt="GreenMIP" height="36" />
    </div>

    <!-- LINKS DE NAVEGACIÓN -->
    <nav class="nav-links">
      <a href="#servicios" class={activeSection === 'servicios' ? 'active' : ''}>
        {#if activeSection === 'servicios' || activeSection === ''}
          <span class="dot"></span>
        {/if}
        Servicios
      </a>
      <a href="#como-funciona" class={activeSection === 'como-funciona' ? 'active' : ''}>
        {#if activeSection === 'como-funciona'}
          <span class="dot"></span>
        {/if}
        Cómo funciona
      </a>
      <!-- ... más links con el mismo patrón ... -->
    </nav>

    <!-- CTA BUTTON -->
    <div class="nav-action">
      <a href="#contacto" class="primary-btn">Contactar</a>
    </div>

  </header>
</div>
```

---

## ⚙️ Lógica JavaScript / Estado Reactivo (Svelte)

Toda la magia del navbar vive en el bloque `<script>` de `+page.svelte`.

### Variables de estado

```svelte
<script lang="ts">
  import { onMount } from "svelte";

  let isMounted  = $state(false);   // Controla si el componente ya montó (SSR safety)
  let isScrolled = $state(false);   // true cuando scrollY > 20px
  let activeSection = $state('');   // ID de la sección visible actual
```

### 1️⃣ Comportamiento de Scroll — `isScrolled`

```svelte
onMount(() => {
  isMounted = true;

  const handleScroll = () => {
    isScrolled = window.scrollY > 20;  // Umbral: 20px
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup al desmontar el componente
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});
```

**Efecto visual:**
- `isScrolled = false` → navbar normal, padding exterior grande, sin blur
- `isScrolled = true` → padding exterior reducido, background semitransparente + `backdrop-filter: blur(8px)`, sombra más intensa

### 2️⃣ Sección Activa — `activeSection` con IntersectionObserver

```svelte
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection = entry.target.id;
      }
    });
  },
  {
    rootMargin: '-20% 0px -60% 0px'
    // Top:    ignora el 20% superior (debajo de la navbar)
    // Bottom: ignora el 60% inferior → activa cuando la sección
    //         está en el 20%-40% central del viewport
  }
);

// Secciones observadas (deben tener estos IDs en el HTML)
const sections = ['servicios', 'como-funciona', 'sobre', 'ventajas', 'contacto']
  .map(id => document.getElementById(id))
  .filter(el => el !== null);

sections.forEach(s => observer.observe(s as Element));

// Cleanup
return () => {
  window.removeEventListener('scroll', handleScroll);
  observer.disconnect();
};
```

### 3️⃣ Función scrollToTop (Logo clickeable)

```svelte
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

---

## 🎨 CSS — Todos los Estilos del Navbar

### Wrapper externo (controla el padding que cambia al scrollear)

```css
.nav-wrapper {
  width: 100%;
  padding: var(--space-6) var(--gutter);  /* 24px top/bottom, gutter lateral */
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  transition: padding 0.3s ease;
}

/* Al hacer scroll: padding reducido → navbar se "comprime" hacia arriba */
.nav-wrapper.scrolled {
  padding-top: var(--space-2);    /* 8px (antes: 24px) */
  padding-bottom: var(--space-2); /* 8px (antes: 24px) */
}
```

### Navbar (la "píldora" flotante)

```css
.navbar {
  background: #F2F4F2;             /* Gris muy claro, casi blanco */
  border-radius: 8px;              /* Esquinas redondeadas (no pill, no cuadrado) */
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-6);
  /* top right bottom left → padding izquierdo más grande para el logo */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

/* Estado scrolled: glassmorphism */
.navbar.scrolled {
  background: rgba(242, 244, 242, 0.95);  /* Casi opaco pero con leve transparencia */
  backdrop-filter: blur(8px);              /* ← EL EFECTO GLASSMORPHISM */
  box-shadow: 0 15px 40px rgba(0,0,0,0.15); /* Sombra más intensa */
}
```

### Links de navegación

```css
/* Oculto en mobile, visible en desktop */
.nav-links {
  display: none;
}

@media (min-width: 1024px) {
  .nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-8);  /* 32px entre links */
  }
}

/* Estilo de cada link */
.nav-links a {
  font-family: 'Krub', sans-serif;
  color: #1a1f16;                /* Negro verdoso oscuro */
  font-weight: 500;
  font-size: var(--text-sm);    /* clamp(0.8rem, 0.77rem + 0.15vw, 0.875rem) */
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--space-2);          /* 8px — espacio para el dot */
  transition: color 0.2s, opacity 0.2s;
}

/* Hover: cambia a verde neón */
.nav-links a:hover {
  color: #83FC88;   /* ← color-accent-primary */
  opacity: 1;
}

/* Link activo: bold */
.nav-links a.active {
  font-weight: 700;
}
```

### Indicador de sección activa — El punto verde (dot)

```css
.nav-links .dot {
  width: 6px;
  height: 6px;
  background-color: var(--color-accent-primary);  /* #83FC88 verde neón */
  border-radius: 50%;
  display: inline-block;
}
```

**Lógica del dot en Svelte:**
```svelte
<!-- El dot aparece SOLO en el link activo -->
<!-- Excepción: en "Servicios" también aparece cuando activeSection === '' (inicio) -->
<a href="#servicios" class={activeSection === 'servicios' ? 'active' : ''}>
  {#if activeSection === 'servicios' || activeSection === ''}
    <span class="dot"></span>
  {/if}
  Servicios
</a>

<!-- Para los demás links: solo cuando son la sección activa -->
<a href="#como-funciona" class={activeSection === 'como-funciona' ? 'active' : ''}>
  {#if activeSection === 'como-funciona'}
    <span class="dot"></span>
  {/if}
  Cómo funciona
</a>
```

### Botón CTA (Contactar)

```css
/* Reutiliza la clase global primary-btn */
:global(.primary-btn) {
  background: var(--color-accent-primary) !important;  /* #83FC88 verde neón */
  color: #1a1f16 !important;
  font-weight: 600 !important;
  font-family: 'Krub', sans-serif !important;
  padding: 10px 20px !important;
  font-size: 15px !important;
  border-radius: 8px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: opacity 0.2s !important;
}

:global(.primary-btn:hover) {
  opacity: 0.8 !important;
}
```

### scroll-padding-top (previene que la navbar tape los títulos de sección)

```css
:global(html) {
  scroll-padding-top: 110px;  /* Altura estimada de la navbar + margen */
  scroll-behavior: smooth;
}
```

---

## 🔤 Tipografía del Navbar

| Elemento | Fuente | Peso | Tamaño | Color |
|---|---|---|---|---|
| Links de nav | `Krub` | 500 (normal) / 700 (activo) | `--text-sm` ≈ 0.875rem | `#1a1f16` |
| Links hover | `Krub` | 500 | `--text-sm` | `#83FC88` |
| Botón CTA | `Krub` | 600 | 15px | `#1a1f16` |
| Logo | SVG (imagen) | — | height: 36px | — |

### Importación de fuentes (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Krub:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
```

- **`Krub`** → Fuente body/UI del navbar. Pesos: 400, 500, 600, 700
- **`Inter`** → Fuente headline (usada en h1/h2 del sitio, no directamente en navbar)

---

## 🎬 Resumen de Transiciones y Efectos

| Comportamiento | Trigger | Propiedad CSS | Valor |
|---|---|---|---|
| Navbar se "achica" al bajar | `scrollY > 20` | `padding` del `.nav-wrapper` | `24px` → `8px` |
| Fondo semitransparente | `scrollY > 20` | `background` | `#F2F4F2` → `rgba(242,244,242,0.95)` |
| Glassmorphism / blur | `scrollY > 20` | `backdrop-filter: blur(8px)` | `none` → `blur(8px)` |
| Sombra intensificada | `scrollY > 20` | `box-shadow` | `0 10px 30px .1` → `0 15px 40px .15` |
| Duración de todas las transiciones | — | `transition: all 0.3s ease` | 300ms, ease |
| Hover color link | hover | `color` | `#1a1f16` → `#83FC88` |
| Hover duración | — | `transition: color 0.2s, opacity 0.2s` | 200ms |
| Dot activo | IntersectionObserver | Renderizado condicional Svelte | Aparece/desaparece |
| Link activo → bold | IntersectionObserver | `font-weight` | `500` → `700` |

---

## 📐 Tokens de Diseño Relevantes (de `tokens.css`)

```css
/* Colores usados en el navbar */
--color-accent-primary: #83FC88;    /* Verde neón — hover links, dot, botón CTA */
--color-text-primary:   #223F30;    /* Verde oscuro — referencia semántica */

/* Espaciado */
--space-2:  8px;
--space-6:  24px;
--space-8:  32px;
--gutter:   clamp(20px, 5vw, 156px);  /* Padding lateral responsivo del wrapper */

/* Tipografía */
--text-sm:  clamp(0.8rem, 0.77rem + 0.15vw, 0.875rem);
--font-base: 'Krub', system-ui, sans-serif;

/* Motion */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--dur-fast:   200ms;
--dur-normal: 300ms;
```

---

## 📱 Comportamiento Responsive

| Breakpoint | Comportamiento |
|---|---|
| `< 1024px` (mobile/tablet) | `.nav-links` → `display: none` (links ocultos) |
| `≥ 1024px` (desktop) | `.nav-links` → `display: flex` con `gap: 32px` |
| El logo y el botón CTA | **Siempre visibles** en todos los breakpoints |

> El navbar no tiene un menú hamburguesa implementado en v3. Los links sencillamente se ocultan en mobile.

---

## 🔍 Comparación Rápida — Checklist para v2

Usa esta lista para verificar qué tiene y qué le falta al navbar en el repositorio aprobado:

- [ ] **Scroll listener** con umbral en `scrollY > 20`
- [ ] **Clase `.scrolled`** aplicada al wrapper Y al header
- [ ] **Padding del wrapper** que reduce de 24px → 8px al scrollear
- [ ] **`backdrop-filter: blur(8px)`** en estado scrolled
- [ ] **Background semitransparente** en estado scrolled (`rgba` vs color sólido)
- [ ] **`box-shadow` más intensa** en estado scrolled
- [ ] **`transition: all 0.3s ease`** en el `.navbar`
- [ ] **`transition: padding 0.3s ease`** en el `.nav-wrapper`
- [ ] **IntersectionObserver** con `rootMargin: '-20% 0px -60% 0px'`
- [ ] **`activeSection`** actualizado por el observer
- [ ] **Dot verde** (`.dot`) renderizado condicionalmente por sección activa
- [ ] **`font-weight: 700`** en el link activo
- [ ] **Fuente `Krub`** importada y aplicada a los links
- [ ] **Hover color `#83FC88`** en los links
- [ ] **Logo clickeable** que llama a `scrollToTop()`
- [ ] **`scroll-padding-top: 110px`** en `html` global
- [ ] **`scroll-behavior: smooth`** en `html` global
- [ ] **Links ocultos en mobile** (`display: none` < 1024px)
- [ ] **max-width: 1200px** centrado en el navbar

---

## 📌 Valores Hardcodeados (No tokenizados)

Algunos valores en el navbar no usan variables CSS y están hardcodeados. Documentados aquí para no perderlos:

| Propiedad | Valor | Dónde |
|---|---|---|
| Color de fondo base | `#F2F4F2` | `.navbar` background |
| Color de fondo scrolled | `rgba(242, 244, 242, 0.95)` | `.navbar.scrolled` |
| Color texto links | `#1a1f16` | `.nav-links a` color |
| Color hover links | `#83FC88` | `.nav-links a:hover` |
| Border radius navbar | `8px` | `.navbar` |
| Altura logo | `36px` | `<img height="36">` |
| Umbral scroll | `20px` | `window.scrollY > 20` |
| Blur intensity | `8px` | `backdrop-filter: blur(8px)` |
| Font size botón CTA | `15px` | `.primary-btn` |
| Padding botón CTA | `10px 20px` | `.primary-btn` |

---

*Generado desde: `/Users/amarolatoja/Proyectos/Ciclo17/GreenMip.v3/greenmip-landing/src/routes/+page.svelte` y `factory/src/lib/components/navbar/`*
