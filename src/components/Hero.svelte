<script>
  function handleContactClick() {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section id="hero" class="relative overflow-hidden w-full bg-[#1c2e24] text-white min-h-[600px] flex items-center py-12 md:py-24 px-4 md:px-12 lg:px-48">
  <!-- Background texture overlay -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-20 bg-cover bg-center" style="background-image: url('/assets/hero-bg-texture.svg'); transform: rotate(180deg);"></div>
  
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[105px] items-center relative z-10">
    
    <!-- Hero Image (left side on desktop) -->
    <div class="flex justify-center items-center order-2 lg:order-1">
      <div class="relative w-full max-w-[503px] aspect-[503/461] rounded-[16px] overflow-hidden shadow-2xl border border-white/10">
        <img 
          src="/assets/hero-main.png" 
          alt="Monitoreo de plagas en terreno" 
          class="w-full h-full object-cover object-bottom"
        />
      </div>
    </div>
    
    <!-- Hero Text Content (right side on desktop) -->
    <div class="flex flex-col gap-6 items-start justify-center order-1 lg:order-2 max-w-[513px]">
      
      <!-- Contact Info Tag -->
      <div class="font-krub text-[#fefffb] text-base md:text-lg">
        <a href="tel:+56923960489" class="hover:text-greenmip-bright transition-colors underline decoration-solid underline-offset-4">
          Llamar ahora <span class="font-medium">+56 9 23960489</span>
        </a>
      </div>
      
      <!-- Title (H1) -->
      <h1 class="font-inter font-bold text-3xl md:text-[48px] leading-tight md:leading-[56px] text-white tracking-[-1.57px]">
        Monitoreo de plagas con datos precisos
      </h1>
      
      <!-- Caption -->
      <p class="font-krub text-[#fefffb]/90 text-base md:text-[16px] leading-[32px]">
        Monitoreo profesional de plagas con GPS, informes en 48 hrs y atención directa con el asesor. Más de 13 años de experiencia en paltos, cítricos, arándanos y más.
      </p>
      
      <!-- CTA Button -->
      <button 
        on:click={handleContactClick}
        class="btn bg-greenmip-bright text-greenmip-forest hover:bg-greenmip-bright/80 border-none font-semibold px-8 py-3 rounded-[7.052px] h-auto min-h-0 text-base tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        Contactar
      </button>
      
    </div>
  </div>
</section>
