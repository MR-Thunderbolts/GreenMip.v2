<script>
  // Navigation component
  let activeSection = 'servicios';

  const links = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Cómo funciona', id: 'como-funciona' },
    { label: 'Sobre Isaac Vera', id: 'sobre-isaac' },
    { label: 'Ventajas', id: 'ventajas' },
    { label: 'Contacto', id: 'contacto' }
  ];

  function setActive(id) {
    activeSection = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        {#each links as link}
          <li>
            <button 
              on:click={() => setActive(link.id)}
              class="w-full text-left py-2 px-3 hover:bg-greenmip-bright/20 rounded-md transition-colors {activeSection === link.id ? 'text-greenmip-forest font-bold bg-greenmip-bright/10' : ''}"
            >
              {link.label}
            </button>
          </li>
        {/each}
      </ul>
    </div>
    
    <!-- Logo -->
    <button on:click={() => setActive('hero')} class="flex items-center gap-2 cursor-pointer btn btn-ghost p-0 hover:bg-transparent">
      <img src="/assets/logo-greenmip.svg" alt="GreenMIP Logo" class="h-8 md:h-9" />
    </button>
  </div>

  <!-- Desktop Navigation links -->
  <div class="navbar-center hidden lg:flex">
    <ul class="flex items-center gap-8 px-1">
      {#each links as link}
        <li>
          <button 
            on:click={() => setActive(link.id)}
            class="flex items-center gap-2 text-greenmip-forest hover:text-greenmip-forest/80 font-medium text-sm transition-all duration-200 cursor-pointer relative py-2"
          >
            {#if activeSection === link.id}
              <img src="/assets/dot-active.svg" alt="active" class="w-1.5 h-1.5 animate-pulse" />
              <span class="font-semibold text-greenmip-forest">{link.label}</span>
            {:else}
              <span class="text-greenmip-forest/70 hover:text-greenmip-forest">{link.label}</span>
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <!-- CTA Link Button -->
  <div class="navbar-end">
    <button 
      on:click={() => setActive('contacto')}
      class="btn bg-greenmip-bright text-greenmip-forest hover:bg-greenmip-bright/80 border-none font-semibold px-6 py-2 rounded-[9.697px] min-h-[40px] h-[40px] text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200"
    >
      Contactar
    </button>
  </div>
</div>
