<script>
  import { onMount } from 'svelte';
  import { scrollToSection, scrollToTop } from '../../lib/scroll.js';
  import { navbar } from '../../content/navbar.content.js';
  import Icon from '../ui/Icon.svelte';

  let activeSection = $state('');
  let mobileMenuOpen = $state(false);
  let isScrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);

    // Sección activa según lo que realmente está visible en el viewport,
    // no según el último link clickeado (así el logo -> top también la limpia)
    const sectionIds = navbar.links.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });

        activeSection = sectionIds.find((id) => visible.has(id)) ?? '';
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  });

  function setActive(id) {
    scrollToSection(id);
  }

  function setActiveFromMenu(id) {
    mobileMenuOpen = false;
    setTimeout(() => scrollToSection(id), 150);
  }

</script>

<div class="fixed inset-x-0 z-50 px-3 md:px-8 transition-[top] duration-300 {isScrolled ? 'top-3' : 'top-6 md:top-8'}">
  <div class="navbar bg-white shadow-lg rounded-lg px-4 md:px-8 py-2 max-w-[1200px] mx-auto transition-all duration-300 flex-nowrap justify-between gap-3">
    <div class="navbar-start flex-none w-auto">
      <!-- Logo -->
      <a href="#hero" onclick={(e) => { e.preventDefault(); scrollToTop(); }} class="flex items-center cursor-pointer transition-transform duration-200 hover:scale-105">
        <img src={navbar.logo.src} alt={navbar.logo.alt} class="h-7 md:h-9 w-auto max-w-[130px] md:max-w-none object-contain" />
      </a>
    </div>

    <!-- Desktop Navigation links -->
    <div class="navbar-center hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-8 px-1">
        {#each navbar.links as link}
          <li>
            <a
              href="#{link.id}"
              onclick={(e) => { e.preventDefault(); setActive(link.id); }}
              class="flex items-center gap-2 font-krub text-sm cursor-pointer relative py-2 transition-colors duration-300 {activeSection === link.id ? 'text-ink' : 'text-ink/70 hover:text-ink'}"
            >
              <img
                src="/assets/dot-active.svg"
                alt=""
                class="w-1.5 h-1.5 shrink-0 transition-all duration-300 {activeSection === link.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}"
              />
              <span class="font-krub {activeSection === link.id ? 'font-bold' : 'font-medium'}">{link.label}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="navbar-end flex-none w-auto gap-3 md:gap-4">
      <!-- CTA Button (always visible, mobile + desktop) -->
      <a
        href="#contacto"
        onclick={(e) => { e.preventDefault(); setActive('contacto'); }}
        class="btn bg-primary text-primary-content hover:brightness-95 border-none font-semibold px-5 md:px-6 py-2 rounded-lg min-h-[40px] h-[40px] text-xs md:text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200"
      >
        {navbar.cta.label}
      </a>

      <!-- Mobile hamburger -->
      <div class="lg:hidden">
        <button
          onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="btn btn-square bg-transparent border-none shadow-none w-10 h-10 min-h-[40px] text-greenmip-forest hover:bg-greenmip-light-bg hover:text-greenmip-forest"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} class="h-7 w-7" />
        </button>
      </div>
    </div>
  </div>
</div>

{#if mobileMenuOpen}
  <!-- Mobile menu modal -->
  <button
    class="fixed inset-0 z-40 bg-black/40 lg:hidden"
    aria-label="Cerrar menú"
    onclick={() => (mobileMenuOpen = false)}
  ></button>
  <div class="fixed top-28 inset-x-3 z-50 bg-white rounded-2xl shadow-xl p-6 lg:hidden">
    <ul class="flex flex-col items-center gap-2">
      {#each navbar.links as link}
        <li class="w-full">
          <a
            href="#{link.id}"
            onclick={(e) => { e.preventDefault(); setActiveFromMenu(link.id); }}
            class="w-full text-center py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 font-krub text-base transition-colors duration-300 hover:bg-greenmip-light-bg {activeSection === link.id ? 'font-bold text-ink' : 'font-medium text-ink/80'}"
          >
            <img
              src="/assets/dot-active.svg"
              alt=""
              class="w-1.5 h-1.5 shrink-0 transition-all duration-300 {activeSection === link.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}"
            />
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
    <a
      href="#contacto"
      onclick={(e) => { e.preventDefault(); setActiveFromMenu('contacto'); }}
      class="btn bg-primary text-primary-content hover:brightness-95 border-none font-semibold w-full mt-4 rounded-lg min-h-[44px] h-[44px] tracking-wide shadow-sm hover:shadow-md transition-all duration-200"
    >
      {navbar.cta.label}
    </a>
  </div>
{/if}
