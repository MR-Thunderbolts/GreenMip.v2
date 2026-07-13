<script>
  // Advantages Section
  const advantages = [
    {
      title: '+ 13 años de experiencia',
      body: 'Experiencia comprobada en MIP en diferentes cultivos.'
    },
    {
      title: '+ 1600 monitoreos',
      body: 'Realizados con georreferencia GPS exacta en diferentes tipos de cultivos.'
    },
    {
      title: 'Cobertura IV - IX',
      body: 'En las principales zonas agrícolas de Chile.'
    }
  ];
</script>

<section id="ventajas" class="bg-[#838a68] w-full py-16 md:py-24 px-4 md:px-12 lg:px-48 text-white text-center">
  <div class="container mx-auto flex flex-col gap-12">
    
    <!-- Section Header -->
    <div class="flex flex-col gap-4 items-center max-w-[700px] mx-auto">
      <div class="py-[4.797px]">
        <span class="font-inter font-bold text-[9.593px] tracking-[0.7675px] text-white uppercase">
          NUESTRAS VENTAJAS
        </span>
      </div>
      <h2 class="font-inter font-bold text-3xl md:text-[32px] leading-tight text-white tracking-[-1.06px]">
        Protegiendo la rentabilidad de tu cultivo
      </h2>
      <p class="font-krub text-white/95 text-lg md:text-xl leading-[28px]">
        Dedicado exclusivamente al Manejo Integrado de Plagas.
      </p>
    </div>
    
    <!-- Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-4">
      {#each advantages as adv}
        <div class="bg-white text-greenmip-forest rounded-2xl px-6 py-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="flex flex-col gap-3">
            <h3 class="font-inter font-semibold text-2xl md:text-[26px] text-greenmip-forest tracking-[-1.06px] leading-[40px]">
              {adv.title}
            </h3>
            <p class="font-krub text-sm leading-[24px] text-greenmip-gray max-w-[280px] mx-auto">
              {adv.body}
            </p>
          </div>
        </div>
      {/each}
    </div>
    
  </div>
</section>
