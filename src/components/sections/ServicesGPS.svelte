<script>
  import { whatsappUrl } from '../../lib/constants.js';
  import Tag from '../ui/Tag.svelte';
  import CtaButton from '../ui/CtaButton.svelte';
  import { services } from '../../content/services.content.js';
  import Container from '../ui/Container.svelte';

  function handleAdvisorClick() {
    window.open(whatsappUrl(services.whatsappMessage), '_blank');
  }
</script>

<section id="servicios" class="bg-greenmip-sage relative overflow-hidden w-full py-16 md:py-24 text-white">

  <!-- Background texture overlay (paridad V3 §4) -->
  <div
    class="absolute inset-0 z-0 pointer-events-none opacity-40"
    style="background-image: url('/assets/textura-hero-banner.svg'); background-size: cover; background-position: center;"
  ></div>

  <div class="relative z-1">
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">

        <!-- Image (Left side on desktop) -->
        <div class="flex justify-center items-center">
          <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
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
            <span class="font-krub font-normal text-white">{services.subtitle}</span>
          </h2>

          <!-- Description -->
          <p class="font-krub text-greenmip-light-bg/95 text-base leading-[24px] whitespace-pre-wrap">{services.body}</p>

          <!-- CTA Button -->
          <CtaButton label={services.cta.label} onclick={handleAdvisorClick} />

        </div>
      </div>
    </Container>
  </div>
</section>
