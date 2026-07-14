<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import { navbar } from '../../content/navbar.content.js';
  import Icon from '../ui/Icon.svelte';

  let activeSection = $state(navbar.links[0].id);
  let mobileMenuOpen = $state(false);

  function setActive(id) {
    activeSection = id;
    scrollToSection(id);
  }

  function setActiveFromMenu(id) {
    activeSection = id;
    mobileMenuOpen = false;
    setTimeout(() => scrollToSection(id), 150);
  }
</script>

<div class="fixed top-3 inset-x-0 z-50 px-3 md:px-8">
  <div class="navbar bg-white shadow-lg rounded-lg px-4 md:px-8 py-2 max-w-[1200px] mx-auto transition-all duration-300 flex-nowrap justify-between gap-3">
    <div class="navbar-start flex-none w-auto">
      <!-- Logo -->
      <a href="#hero" onclick={(e) => { e.preventDefault(); setActive('hero'); }} class="flex items-center cursor-pointer transition-transform duration-200 hover:scale-105">
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
              class="flex items-center gap-2 text-ink hover:text-ink/80 font-krub font-medium text-sm transition-all duration-200 cursor-pointer relative py-2"
            >
              {#if activeSection === link.id}
                <img src="/assets/dot-active.svg" alt="" class="w-1.5 h-1.5 animate-pulse" />
                <span class="font-krub font-bold text-ink">{link.label}</span>
              {:else}
                <span class="font-krub font-medium text-ink/70 hover:text-ink">{link.label}</span>
              {/if}
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
  <div class="fixed top-20 inset-x-3 z-50 bg-white rounded-2xl shadow-xl p-6 lg:hidden">
    <ul class="flex flex-col items-center gap-2">
      {#each navbar.links as link}
        <li class="w-full">
          <a
            href="#{link.id}"
            onclick={(e) => { e.preventDefault(); setActiveFromMenu(link.id); }}
            class="w-full text-center py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 font-krub text-base transition-colors duration-200 hover:bg-greenmip-light-bg {activeSection === link.id ? 'font-bold text-ink' : 'font-medium text-ink/80'}"
          >
            {#if activeSection === link.id}
              <img src="/assets/dot-active.svg" alt="" class="w-1.5 h-1.5" />
            {/if}
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
