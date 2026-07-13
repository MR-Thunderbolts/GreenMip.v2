<script>
  import Carousel from '../ui/Carousel.svelte';
  import { otherServices } from '../../content/otherServices.content.js';
</script>

<section class="bg-greenmip-sage relative overflow-hidden w-full py-16 md:py-24 px-4 md:px-12 lg:px-48 text-white">
  <!-- Background texture overlay -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-10">
    <img src="/assets/other-services-bg.svg" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="container mx-auto flex flex-col gap-5 relative z-10">

    <!-- Section Header -->
    <div class="flex flex-col gap-3 items-start max-w-[500px]">
      <h2 class="font-inter font-bold text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] text-white tracking-[-0.03em]">
        {otherServices.title}
      </h2>
      <p class="font-krub text-white/90 text-base leading-[28px]">
        {otherServices.intro}
      </p>
    </div>

    <!-- Mobile: carousel / Desktop: grid -->
    <div class="md:hidden">
      <Carousel itemCount={otherServices.services.length} dotVariant="on-color">
        {#snippet children()}
          {#each otherServices.services as svc, i}
            <div class="bg-white text-greenmip-forest rounded-2xl pt-10 pb-6 px-6 flex flex-col gap-4 shrink-0 w-[85%] snap-start">
              <div class="inline-flex self-start px-3 py-1 rounded-full border-[0.75px] border-greenmip-sage">
                <span class="font-inter font-bold text-[11px] text-greenmip-sage uppercase tracking-[0.06em]">
                  {otherServices.title} {i + 1}/{otherServices.services.length}
                </span>
              </div>
              <h3 class="font-inter font-bold text-2xl leading-[30px] text-greenmip-forest tracking-[-0.03em]">
                {svc.title}
              </h3>
              <p class="font-krub text-sm leading-[22px] text-greenmip-forest">
                {svc.body}
              </p>
            </div>
          {/each}
        {/snippet}
      </Carousel>
    </div>

    <!-- Cards Grid (desktop) -->
    <div class="hidden md:grid grid-cols-3 gap-6 items-stretch">
      {#each otherServices.services as svc}
        <div class="bg-white text-greenmip-forest rounded-2xl p-7 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[368px] hover:-translate-y-1">
          <h3 class="font-inter font-semibold text-xl md:text-2xl text-greenmip-forest tracking-tight leading-[30px]">
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
