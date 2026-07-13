<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import { navbar } from '../../content/navbar.content.js';

  let activeSection = $state(navbar.links[0].id);

  function setActive(id) {
    activeSection = id;
    scrollToSection(id);
  }
</script>

<div class="navbar bg-white/90 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 py-3 border-b border-greenmip-olive/10 transition-all duration-300">
  <div class="navbar-start">
    <!-- Mobile dropdown menu -->
    <div class="dropdown">
      <button tabindex="0" class="btn btn-ghost lg:hidden text-greenmip-forest" aria-label="Menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-greenmip-forest font-semibold gap-1">
        {#each navbar.links as link}
          <li>
            <a
              href="#{link.id}"
              onclick={(e) => { e.preventDefault(); setActive(link.id); }}
              class="w-full text-left py-2 px-3 hover:bg-greenmip-bright/20 rounded-md transition-colors {activeSection === link.id ? 'text-greenmip-forest font-bold bg-greenmip-bright/10' : ''}"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Logo -->
    <a href="#hero" onclick={(e) => { e.preventDefault(); setActive('hero'); }} class="flex items-center gap-2 cursor-pointer btn btn-ghost p-0 hover:bg-transparent">
      <img src={navbar.logo.src} alt={navbar.logo.alt} class="h-8 md:h-9" />
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

  <!-- CTA Link Button (desktop only -- mobile navbar is logo + hamburger only) -->
  <div class="navbar-end hidden lg:flex">
    <a
      href="#contacto"
      onclick={(e) => { e.preventDefault(); setActive('contacto'); }}
      class="btn bg-greenmip-bright text-greenmip-forest hover:bg-greenmip-bright/80 border-none font-semibold px-6 py-2 rounded-lg min-h-[40px] h-[40px] text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200"
    >
      {navbar.cta.label}
    </a>
  </div>
</div>
