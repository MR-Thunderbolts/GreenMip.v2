<script>
  // Footer component
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<footer class="bg-[#365c48] relative overflow-hidden w-full py-12 md:py-16 px-4 md:px-12 lg:px-48 text-white">
  <!-- Background texture overlay -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-10">
    <img src="/assets/footer-bg-texture.svg" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="container mx-auto flex flex-col gap-12 relative z-10">
    
    <!-- Top section with columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-[25px] items-start">
      
      <!-- Column 1: Logo & Summary (3 cols) -->
      <div class="lg:col-span-3 flex flex-col gap-4 items-start max-w-[264px]">
        <img src="/assets/logo-footer.svg" alt="GreenMIP Logo" class="h-[29.898px]" />
        <p class="font-krub font-medium text-xs leading-[24px] text-white/90">
          Agromonitoreo avanzado. Decisiones rentables basadas en data exacta para cultivos a lo largo de Chile.
        </p>
      </div>
      
      <!-- Column 2: Navigation (3 cols) -->
      <div class="lg:col-span-3 flex flex-col gap-3 items-start">
        <h4 class="font-inter font-bold text-xs tracking-[0.7675px] text-white uppercase mb-1">
          Navegación
        </h4>
        <button on:click={() => scrollToSection('servicios')} class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright transition-colors text-left cursor-pointer">
          Servicios
        </button>
        <button on:click={() => scrollToSection('como-funciona')} class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright transition-colors text-left cursor-pointer">
          Cómo funciona
        </button>
        <button on:click={() => scrollToSection('sobre-isaac')} class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright transition-colors text-left cursor-pointer">
          Sobre Isaac Vera
        </button>
        <button on:click={() => scrollToSection('ventajas')} class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright transition-colors text-left cursor-pointer">
          Ventajas
        </button>
        <button on:click={() => scrollToSection('contacto')} class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright transition-colors text-left cursor-pointer">
          Contacto
        </button>
      </div>
      
      <!-- Column 3: Contact & Socials (3 cols) -->
      <div class="lg:col-span-3 flex flex-col gap-3 items-start">
        <h4 class="font-inter font-bold text-xs tracking-[0.7675px] text-white uppercase mb-1">
          Contacto
        </h4>
        <a href="tel:+56930707919" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all">
          +56 9 3070 7919
        </a>
        <a href="mailto:isaacvera@greenmip.cl" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all break-all">
          isaacvera@greenmip.cl
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all">
          LinkedIn
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all">
          Instagram
        </a>
      </div>
      
      <!-- Column 4: Certifications & Sello CO2 (3 cols) -->
      <div class="lg:col-span-3 flex flex-col gap-4 items-start">
        <h4 class="font-inter font-bold text-xs tracking-[0.7675px] text-white uppercase">
          Certificaciones
        </h4>
        <p class="font-krub font-semibold text-base text-[#eafc83] leading-[28px]">
          Este sitio funciona con energía <br />100% renovable certificada.
        </p>
        
        <!-- Energy Footnote Image -->
        <img src="/assets/energy-footnote.png" alt="Huella de carbono neutral" class="h-[80.07px] w-auto rounded-md object-contain" />
        
        <!-- Sello de Bajo Impacto Ambiental (0.3g CO2) -->
        <div class="relative w-[212.415px] h-[67.973px] border border-[#f0f2f1]/30 rounded-lg flex items-center p-2 bg-[#2d4d3c]/40 backdrop-blur-sm overflow-hidden select-none">
          <!-- SVG Leaf and BG inside container -->
          <div class="absolute left-2 w-10 h-10 flex items-center justify-center">
            <img src="/assets/co2-seal-bg.svg" alt="" class="absolute w-full h-full opacity-20" />
            <img src="/assets/co2-seal-leaf.svg" alt="" class="w-6 h-6 z-10" />
          </div>
          
          <!-- Line separator -->
          <img src="/assets/footer-line.svg" alt="" class="absolute left-14 top-1.5 bottom-1.5 h-[80%] opacity-30" />
          
          <div class="ml-14 flex flex-col justify-center items-start text-left font-['DM_Sans']">
            <p class="font-bold text-[11.895px] text-[#f0f2f1] leading-[14px]">
              0.3g de CO<sub>2</sub> <span class="font-normal text-[10px]">por visita</span>
            </p>
            <p class="text-[7.65px] font-bold text-[#f0f2f1]/80 mt-0.5 leading-[10px]">
              Sitio web de bajo impacto ambiental.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Divider -->
    <div class="w-full h-px bg-white/10 mt-4"></div>
    
    <!-- Bottom section: Copyright -->
    <div class="text-center font-krub font-semibold text-xs text-white/80 leading-[24px]">
      <p>
        © 2026 GreenMIP. Todos los derechos reservados. Sitio Web desarrollado por 
        <a href="https://ciclo17.cl" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-greenmip-bright transition-colors">
          Ciclo17.cl
        </a>
      </p>
    </div>
    
  </div>
</footer>
