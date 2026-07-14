<script>
  import { whatsappUrl } from '../../lib/constants.js';
  import Tag from '../ui/Tag.svelte';
  import CtaButton from '../ui/CtaButton.svelte';
  import { services } from '../../content/services.content.js';

  function handleAdvisorClick() {
    window.open(whatsappUrl(services.whatsappMessage), '_blank');
  }
</script>

<section id="servicios" class="bg-greenmip-sage relative overflow-hidden w-full py-16 md:py-24 px-4 md:px-12 lg:px-48 text-white">

  <!-- Background textures and shapes -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-100">
    <img src="/assets/services-bg-group.svg" alt="" class="absolute top-0 left-0 w-1/4 max-w-[200px]" />
    <img src="/assets/services-bg-group1.svg" alt="" class="absolute bottom-10 left-0 w-1/5 max-w-[150px]" />
    <img src="/assets/services-bg-container.svg" alt="" class="absolute inset-0 w-full h-full object-cover" />
  </div>

  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

    <!-- Image (Left side on desktop) -->
    <div class="flex justify-center items-center">
      <div class="relative w-full max-w-[451px] aspect-[450/390] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <img
          src={services.image.src}
          alt={services.image.alt}
          class="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Text Content (Right side on desktop) -->
    <div class="flex flex-col gap-6 items-start justify-center max-w-[547px]">

      <Tag label={services.tag} variant="white" />

      <!-- Title -->
      <h2 class="font-inter font-bold text-[26px] md:text-[48px] leading-[32px] md:leading-[56px] text-greenmip-light-bg tracking-[-0.03em]">
        {services.title} <br />
        <span class="font-krub font-bold text-white">{services.subtitle}</span>
      </h2>

      <!-- Description -->
      <p class="font-krub text-greenmip-light-bg/95 text-base leading-[24px] whitespace-pre-wrap">{services.body}</p>

      <!-- CTA Button -->
      <CtaButton label={services.cta.label} onclick={handleAdvisorClick} />

    </div>
  </div>
</section>
