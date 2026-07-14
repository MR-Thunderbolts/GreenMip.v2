<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import { navbar } from '../../content/navbar.content.js';
  import Icon from '../ui/Icon.svelte';

  let activeSection = $state(navbar.links[0].id);

  function setActive(id) {
    activeSection = id;
    scrollToSection(id);
  }

  function setActiveFromMenu(id) {
    activeSection = id;
    const el = document.activeElement;
    if (el instanceof HTMLElement) el.blur();
    setTimeout(() => scrollToSection(id), 150);
  }
</script>

<div class="fixed top-3 inset-x-0 z-50 px-3 md:px-8">
  <div class="navbar bg-white shadow-lg rounded-2xl px-2 md:px-8 py-2 max-w-6xl mx-auto transition-all duration-300 flex-nowrap gap-1">
    <div class="navbar-start flex-none">
      <!-- Logo -->
      <a href="#hero" onclick={(e) => { e.preventDefault(); setActive('hero'); }} class="flex items-center cursor-pointer transition-transform duration-200 hover:scale-105">
        <img src={navbar.logo.src} alt={navbar.logo.alt} class="h-7 md:h-9 w-auto max-w-[130px] md:max-w-none object-contain" />
      </a>
    </div>

    <!-- Desktop Navigation links -->
    <div class="navbar-center hidden lg:flex">
      <ul class="flex items-center gap-8 px-1">
        {#each navbar.links as link}
          <li>
            <a
              href="#{link.id}"
              onclick={(e) => { e.preventDefault(); setActive(link.id); }}
              class="flex items-center gap-2 text-greenmip-forest hover:text-greenmip-forest/80 font-medium text-sm transition-all duration-200 cursor-pointer relative py-2"
            >
              {#if activeSection === link.id}
                <img src="/assets/dot-active.svg" alt="" class="w-1.5 h-1.5 animate-pulse" />
                <span class="font-semibold text-greenmip-forest">{link.label}</span>
              {:else}
                <span class="text-greenmip-forest/70 hover:text-greenmip-forest">{link.label}</span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="navbar-end flex-none gap-1 md:gap-2">
      <!-- CTA Button (always visible, mobile + desktop) -->
      <a
        href="#contacto"
        onclick={(e) => { e.preventDefault(); setActive('contacto'); }}
        class="btn bg-primary text-primary-content hover:brightness-95 border-none font-semibold px-3 md:px-6 py-2 rounded-lg min-h-[40px] h-[40px] text-xs md:text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200"
      >
        {navbar.cta.label}
      </a>

      <!-- Mobile hamburger -->
      <div class="dropdown dropdown-end lg:hidden">
        <button tabindex="0" class="btn btn-square btn-sm bg-transparent border-none shadow-none px-1 text-greenmip-forest hover:bg-greenmip-light-bg hover:text-greenmip-forest" aria-label="Menu">
          <Icon name="menu" class="h-5 w-5" />
        </button>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white border border-greenmip-border rounded-box w-52 text-greenmip-forest font-semibold gap-1 origin-top transition-[opacity,transform] duration-150 ease-out">
          {#each navbar.links as link}
            <li>
              <a
                href="#{link.id}"
                onclick={(e) => { e.preventDefault(); setActiveFromMenu(link.id); }}
                class="w-full text-left py-2 px-3 rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-greenmip-light-bg {activeSection === link.id ? 'font-bold' : ''}"
              >
                {#if activeSection === link.id}
                  <img src="/assets/dot-active.svg" alt="" class="w-1.5 h-1.5" />
                {/if}
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
