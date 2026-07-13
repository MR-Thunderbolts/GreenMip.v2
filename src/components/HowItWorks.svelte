<script>
  // How it works component
  const steps = [
    {
      num: '01',
      title: 'Visita técnica en terreno',
      body: 'GPS en mano, Isaac recorre el campo e inspecciona frutos, hojas, ramas, brotes, troncos y grietas. Registra plagas y agentes de control biológico con georreferencia exacta.',
      tags: ['GPS Georreferencia', 'ACB', 'Umbrales'],
      img: '/assets/how-1.png'
    },
    {
      num: '02',
      title: 'Reportes e informes en 48 hrs',
      body: 'Recibes un mapa georreferenciado con niveles de incidencia por sector (verde / amarillo / rojo), evolución de plagas en el tiempo y sugerencias de manejo concretas.',
      tags: ['Mapa de incidencia', 'WhatsApp', '48 hrs'],
      img: '/assets/how-2.png'
    },
    {
      num: '03',
      title: 'Decisiones informadas, cultivo rentable',
      body: 'Con data de temporada te anticipas, reduces aplicaciones innecesarias y tomas el control fitosanitario con criterio técnico. Menos costo, más rendimiento.',
      tags: ['Preventivo', 'Sustentable', 'Rentable'],
      img: '/assets/how-3.png'
    }
  ];
</script>

<section id="como-funciona" class="bg-white w-full py-16 md:py-24 px-4 md:px-12 lg:px-48">
  <div class="container mx-auto flex flex-col gap-12">
    
    <!-- Section Header -->
    <div class="flex flex-col gap-4 items-start max-w-[500px]">
      <div class="py-[4.797px] rounded-full">
        <span class="font-inter font-bold text-[9.593px] tracking-[0.7675px] text-[#01714d] uppercase">
          Cómo funciona
        </span>
      </div>
      <h2 class="font-inter font-bold text-3xl md:text-[32px] leading-tight text-greenmip-forest tracking-[-1.06px]">
        Monitoreo de plagas
      </h2>
      <p class="font-krub text-greenmip-gray text-lg md:text-xl leading-[28px]">
        Así funciona el servicio dedicado exclusivamente al manejo integrado de plagas.
      </p>
    </div>
    
    <!-- Steps Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-4">
      {#each steps as step}
        <div class="flex flex-col justify-between bg-white border border-[#c8d3ad]/30 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#838a68]/40 transition-all duration-300">
          
          <!-- Text Content -->
          <div class="flex flex-col gap-4 items-start mb-6">
            <!-- Step Number and Title -->
            <div class="flex gap-3 items-start w-full">
              <span class="font-inter font-normal text-greenmip-gray text-base tracking-[0.7675px] uppercase pt-1">
                {step.num}
              </span>
              <div class="flex flex-col gap-4">
                <h3 class="font-inter font-bold text-xl text-greenmip-forest leading-[24px]">
                  {step.title}
                </h3>
                <p class="font-krub text-greenmip-gray text-base leading-[24px]">
                  {step.body}
                </p>
              </div>
            </div>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-2 ml-7">
              {#each step.tags as tag}
                <div class="border border-[#838a68] px-[12.324px] py-[4.785px] rounded-full">
                  <span class="font-krub font-medium text-[11.599px] text-greenmip-gray">
                    {tag}
                  </span>
                </div>
              {/each}
            </div>
          </div>
          
          <!-- Image -->
          <div class="w-full h-[185px] rounded-[16px] overflow-hidden border border-black/5 mt-auto">
            <img 
              src={step.img} 
              alt={step.title} 
              class="w-full h-full object-cover"
            />
          </div>
          
        </div>
      {/each}
    </div>
    
  </div>
</section>
