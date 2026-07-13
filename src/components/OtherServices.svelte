<script>
  // Other Services Section
  const services = [
    {
      title: 'Gestión de liberación de Agentes de Control Biológico',
      body: 'A partir de la información generada por los monitoreos, diseño e implemento estrategias de liberación de Agentes de Control Biológico (ACB) adaptadas a la realidad de cada campo. El servicio incluye asesoría en dosificación, adquisición, liberación y evaluación de resultados, maximizando la eficacia del control biológico.'
    },
    {
      title: 'Evaluaciones post Aplicación de Fitosanitarios',
      body: 'Realizo monitoreos georreferenciados para medir la efectividad de las aplicaciones fitosanitarias sobre las plagas objetivo y su impacto en los Agentes de Control Biológico. La información obtenida permite optimizar futuras estrategias de manejo y mejorar la toma de decisiones.'
    },
    {
      title: 'Capacitación y Transferencia Técnica',
      body: 'Fortalezco las capacidades de los equipos de campo mediante capacitaciones teórico-prácticas en monitoreo de plagas, identificación de especies, metodologías de evaluación, gestión de datos y análisis de información. También desarrollo talleres y días de campo enfocados en la toma de decisiones basada en evidencia.'
    }
  ];
</script>

<section class="bg-[#838a68] relative overflow-hidden w-full py-16 md:py-24 px-4 md:px-12 lg:px-48 text-white">
  <!-- Background texture overlay -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-10">
    <img src="/assets/other-services-bg.svg" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="container mx-auto flex flex-col gap-12 relative z-10">
    
    <!-- Section Header -->
    <div class="flex flex-col gap-3 items-start max-w-[500px]">
      <h2 class="font-inter font-bold text-3xl md:text-[24px] leading-tight text-white tracking-[-1.06px]">
        Otros servicios
      </h2>
      <p class="font-krub text-white/90 text-base leading-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum volutpat turpis, ut sodales neque elementum non.
      </p>
    </div>
    
    <!-- Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {#each services as svc}
        <div class="bg-white text-greenmip-forest rounded-2xl p-7 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[368px] hover:-translate-y-1">
          <h3 class="font-inter font-semibold text-xl md:text-2xl text-greenmip-forest tracking-[-1.06px] leading-[30px]">
            {svc.title}
          </h3>
          <p class="font-krub text-sm leading-[24px] text-greenmip-gray mt-2">
            {svc.body}
          </p>
        </div>
      {/each}
    </div>
    
  </div>
</section>
