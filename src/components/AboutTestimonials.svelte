<script>
  // About and Testimonials Section
  const crops = ['Paltos', 'Cítricos', 'Arándanos', 'Cerezos', 'Manzanos', 'Uva', 'Hortalizas'];

  const testimonials = [
    {
      body: '"Antes nos costaba aplicar acaricidas a tiempo, porque nuestro monitoreo interno era poco práctico y la información llegaba tarde. Esto complicaba la toma de decisiones y elevaba los costos cuando las poblaciones de ácaros crecían demasiado. Con el apoyo técnico y las recomendaciones de Isaac, logramos anticiparnos a los problemas, optimizar el control de ácaros fitófagos y reducir nuestros costos."',
      author: 'Allen Vega',
      title: 'Administrador Agrícola, G y A.',
      location: 'Curacaví, Región Metropolitana.'
    },
    {
      body: '"En nuestros mandarinos y paltos hemos enfrentado distintas plagas de importancia económica. El sistema de monitoreo e informes de Isaac, con mapas y gráficos fáciles de interpretar, nos ayuda mucho a seguir las plagas y evaluar las aplicaciones. Tener información clara y oportuna nos ha permitido optimizar la gestión fitosanitaria."',
      author: 'Luis Chávez',
      title: 'Administrador, Agrícola Olivia.',
      location: 'Salamanca, Región de Coquimbo.'
    },
    {
      body: '"Hemos trabajado en conjunto con Isaac brindando soporte técnico a productores de paltos en distintas zonas del país. Su capacidad para generar información confiable sumado a nuestras sugerencias de control ha sido un aporte de gran valor para nuestros clientes. Destaco su compromiso, profesionalismo y conocimiento técnico, es nuestro aliado técnico para cualquier asesoría MIP."',
      author: 'Pamela Gjuranovic',
      title: 'Asesor Técnico Comercial, Koppert Chile.',
      location: 'Santiago, Región Metropolitana.'
    }
  ];
</script>

<section id="sobre-isaac" class="bg-white w-full py-16 md:py-24 px-4 md:px-12 lg:px-48">
  <div class="container mx-auto flex flex-col gap-20">
    
    <!-- Row 1: About Asesor (Isaac Vera) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[95px] items-center">
      
      <!-- Photo side (Left on desktop) -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="border-[#223f30] border-[0.5px] p-[16.5px] rounded-[24px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.08)] bg-white max-w-[456px] w-full">
          <div class="rounded-[24px] overflow-hidden shadow-inner aspect-[423/383]">
            <img 
              src="/assets/isaac-vera.png" 
              alt="Isaac Vera" 
              class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      <!-- Info side (Right on desktop) -->
      <div class="lg:col-span-7 flex flex-col gap-5 items-start max-w-[575px]">
        
        <!-- Tag -->
        <div class="border-[0.857px] border-greenmip-olive/40 px-[8.857px] py-[5.654px] rounded-full">
          <span class="font-inter font-bold text-[9.593px] tracking-[0.7675px] text-[#656d51] uppercase">
            Asesor
          </span>
        </div>
        
        <!-- Title -->
        <h2 class="font-inter font-bold text-3xl md:text-[32px] leading-tight text-greenmip-forest tracking-[-1.06px]">
          Soy Isaac Vera,<br />tu aliado en el campo
        </h2>
        
        <!-- Description -->
        <p class="font-krub text-greenmip-gray text-base leading-[28px]">
          Técnico agrícola con más de 13 años de experiencia en Manejo Integrado de Plagas. Mi objetivo es simple: que cuentes con información clara para tomar decisiones acertadas en el momento oportuno. Sin teoría. Datos de tu campo en tus manos.
        </p>
        
        <!-- Crops Section -->
        <div class="flex flex-col gap-2 mt-2 w-full">
          <div class="py-[4.797px]">
            <span class="font-inter font-bold text-[9.593px] tracking-[0.7675px] text-[#656d51] uppercase">
              CULTIVOS ATENDIDOS
            </span>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each crops as crop}
              <div class="border border-[#838a68] px-[12.324px] py-[4.785px] rounded-full bg-white">
                <span class="font-krub font-semibold text-[11.599px] text-[#838a68]">
                  {crop}
                </span>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- LinkedIn Link -->
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-2 mt-4 hover:opacity-80 transition-opacity font-inter font-semibold text-[#223f30] text-[14.4px]"
        >
          <img src="/assets/linkedin-icon.svg" alt="LinkedIn" class="w-4 h-4" />
          <span>Ver perfil en LinkedIn</span>
        </a>
        
      </div>
      
    </div>
    
    <!-- Row 2: Testimonials -->
    <div class="flex flex-col gap-8 items-center mt-8">
      <h3 class="font-inter font-semibold text-2xl text-greenmip-forest tracking-[-1.06px] text-center">
        Qué dicen mis clientes
      </h3>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full">
        {#each testimonials as item}
          <div class="bg-white border border-[#9ca47e] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <p class="font-krub text-sm leading-[24px] text-greenmip-forest italic mb-6">
              {item.body}
            </p>
            <div>
              <h4 class="font-krub font-bold text-base text-greenmip-forest">
                {item.author}
              </h4>
              <p class="font-krub text-[12px] text-greenmip-gray leading-[20px] mt-1">
                {item.title}
                <br />
                {item.location}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
  </div>
</section>
