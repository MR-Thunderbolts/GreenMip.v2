<script>
  import { advantages } from '../../content/advantages.content.js';
</script>

<section id="ventajas" class="bg-greenmip-sage w-full py-16 md:py-24 px-4 md:px-12 lg:px-48 text-white text-center">
  <div class="container mx-auto flex flex-col gap-12">

    <!-- Section Header -->
    <div class="flex flex-col gap-4 items-center max-w-[700px] mx-auto">
      <span class="font-inter font-bold text-xs tracking-[0.06em] text-white uppercase">
        {advantages.eyebrow}
      </span>
      <h2 class="font-inter font-bold text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] text-white tracking-[-0.03em]">
        {advantages.title}
      </h2>
      <p class="font-krub text-white/95 text-lg md:text-xl leading-[28px]">
        {advantages.subtitle}
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-4">
      {#each advantages.items as item}
        <div class="bg-white text-greenmip-forest rounded-2xl px-6 py-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="flex flex-col gap-3">
            <h3 class="font-inter font-semibold text-2xl md:text-[26px] text-greenmip-forest tracking-tight leading-[40px]">
              {item.title}
            </h3>
            <p class="font-krub text-sm leading-[24px] text-greenmip-gray max-w-[280px] mx-auto">
              {item.body}
            </p>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
