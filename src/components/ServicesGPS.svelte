<script>
  // Services GPS Section
  function handleAdvisorClick() {
    // Open WhatsApp directly to talk with the advisor
    window.open('https://wa.me/56923960489?text=Hola%20Isaac,%20quisiera%20saber%20más%20sobre%20el%20servicio%20de%20Monitoreo%20GPS%20de%20GreenMIP.', '_blank');
  }
</script>

<section id="servicios" class="bg-[#838a68] relative overflow-hidden w-full py-16 md:py-24 px-4 md:px-12 lg:px-48 text-white">
  
  <!-- Background textures and shapes -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-10">
    <img src="/assets/services-bg-group.svg" alt="" class="absolute top-0 left-0 w-1/4 max-w-[200px]" />
    <img src="/assets/services-bg-group1.svg" alt="" class="absolute bottom-10 left-0 w-1/5 max-w-[150px]" />
    <img src="/assets/services-bg-container.svg" alt="" class="absolute inset-0 w-full h-full object-cover" />
  </div>

  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[107px] items-center relative z-10">
    
    <!-- Image (Left side on desktop) -->
    <div class="flex justify-center items-center">
      <div class="relative w-full max-w-[450.796px] aspect-[450/390] rounded-[16px] overflow-hidden shadow-2xl border border-white/10">
        <img 
          src="/assets/services-gps-main.png" 
          alt="Monitoreo GPS en el campo" 
          class="w-full h-full object-cover object-center"
        />
      </div>
    </div>
    
    <!-- Text Content (Right side on desktop) -->
    <div class="flex flex-col gap-6 items-start justify-center max-w-[547px]">
      
      <!-- Tag -->
      <div class="border border-[#fefffb] px-[14.562px] py-[5.654px] rounded-full">
        <span class="font-inter font-bold text-[9.593px] tracking-[0.7675px] text-[#fefffb] uppercase">
          SERVICIOS
        </span>
      </div>
      
      <!-- Title -->
      <h2 class="font-inter font-bold text-3xl md:text-[48px] leading-tight md:leading-[56px] text-[#fefffb] tracking-[-1.06px]">
        Monitoreo GPS <br />
        <span class="font-krub font-bold text-white">Data precisa para un mejor control</span>
      </h2>
      
      <!-- Description -->
      <p class="font-krub text-[#fefffb]/95 text-base md:text-[16px] leading-[24px] whitespace-pre-wrap">Transformamos las visitas a terreno en información estructurada. Entregamos mapas de incidencia, análisis de tendencias y recomendaciones accionables para proteger tu rentabilidad.</p>
      
      <!-- CTA Button -->
      <button 
        on:click={handleAdvisorClick}
        class="btn bg-greenmip-bright text-greenmip-forest hover:bg-greenmip-bright/80 border-none font-semibold px-8 py-3.5 rounded-[8px] h-auto min-h-0 text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        Hablar con el asesor
      </button>
      
    </div>
  </div>
</section>
