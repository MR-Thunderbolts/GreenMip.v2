<script>
  // Problem section
  function handleLearnMore() {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section id="problema" class="bg-white w-full py-16 md:py-24 px-4 md:px-12 lg:px-48">
  <div class="container mx-auto flex flex-col gap-12 md:gap-16">
    
    <!-- Top Introduction Row -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[123px] items-center">
      
      <!-- Text (Left side on desktop) -->
      <div class="lg:col-span-7 flex flex-col gap-6 items-start">
        
        <!-- Tag -->
        <div class="border-[0.857px] border-greenmip-olive/40 px-[8.857px] py-[5.654px] rounded-full">
          <span class="font-inter font-bold text-[9.593px] tracking-[0.7675px] text-[#656d51] uppercase">
            EL PROBLEMA
          </span>
        </div>
        
        <!-- Title -->
        <h2 class="font-inter font-bold text-3xl md:text-[48px] leading-tight md:leading-[56px] text-greenmip-forest tracking-[-1.06px] max-w-[555px]">
          Sin datos precisos no puedes controlar tus plagas
        </h2>
        
        <!-- Action link -->
        <button 
          on:click={handleLearnMore}
          class="font-krub font-semibold text-lg md:text-xl text-greenmip-dark-bg hover:text-greenmip-forest transition-colors cursor-pointer group flex items-center gap-1"
        >
          Saber más <span class="group-hover:translate-x-1 transition-transform">&gt;</span>
        </button>
        
      </div>
      
      <!-- Image (Right side on desktop) -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="relative w-full max-w-[458.8px] aspect-[458/286] rounded-[16px] overflow-hidden shadow-lg border border-black/5">
          <img 
            src="/assets/problem-main.png" 
            alt="Muestra de plaga no controlada" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </div>
    
    <!-- Three Key Pain Points Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-4">
      
      <!-- Point 1 -->
      <div class="flex flex-col gap-4 items-start p-4 rounded-xl hover:bg-green-50/50 transition-colors duration-200">
        <!-- Icon container -->
        <div class="w-10 h-10 flex items-center justify-center bg-green-50 rounded-lg">
          <img src="/assets/problem-icon1.svg" alt="Aplicaciones tardías" class="w-6 h-6 text-greenmip-forest" />
        </div>
        <h3 class="font-inter font-bold text-xl text-greenmip-forest">
          Aplicaciones tardías
        </h3>
        <p class="font-krub text-greenmip-gray text-base leading-[24px]">
          No detectar a tiempo los estadíos más susceptibles, reduce la efectividad del control.
        </p>
      </div>
      
      <!-- Point 2 -->
      <div class="flex flex-col gap-4 items-start p-4 rounded-xl hover:bg-green-50/50 transition-colors duration-200">
        <!-- Icon container -->
        <div class="w-10 h-10 flex items-center justify-center bg-green-50 rounded-lg">
          <img src="/assets/problem-icon2.svg" alt="Información dispersa" class="w-6 h-6 text-greenmip-forest" />
        </div>
        <h3 class="font-inter font-bold text-xl text-greenmip-forest">
          Información dispersa
        </h3>
        <p class="font-krub text-greenmip-gray text-base leading-[28px]">
          Sin datos claros y georreferenciados, el control se vuelve ineficiente y muy costoso.
        </p>
      </div>
      
      <!-- Point 3 -->
      <div class="flex flex-col gap-4 items-start p-4 rounded-xl hover:bg-green-50/50 transition-colors duration-200">
        <!-- Icon container -->
        <div class="w-10.5 h-10.5 flex items-center justify-center bg-green-50 rounded-lg">
          <img src="/assets/problem-icon3.svg" alt="Rechazos de exportación" class="w-6.5 h-6.5 text-greenmip-forest" />
        </div>
        <h3 class="font-inter font-bold text-xl text-greenmip-forest">
          Rechazos de exportación
        </h3>
        <p class="font-krub text-greenmip-gray text-base leading-[24px]">
          Actuar tarde o sin umbrales definidos pone en riesgo toda la producción de la temporada.
        </p>
      </div>
      
    </div>
    
  </div>
</section>
