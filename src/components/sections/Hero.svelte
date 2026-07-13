<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import { CONTACT } from '../../lib/constants.js';
  import CtaButton from '../ui/CtaButton.svelte';
  import { hero } from '../../content/hero.content.js';
</script>

<section id="hero" class="relative overflow-hidden w-full bg-greenmip-forest text-white min-h-[600px] flex items-center py-12 md:py-24 px-4 md:px-12 lg:px-48">
  <!-- Background texture overlay -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-20 bg-cover bg-center" style="background-image: url('/assets/hero-bg-texture.svg'); transform: rotate(180deg);"></div>

  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

    <!-- Hero Image (top on mobile, left on desktop) -->
    <div class="flex justify-center items-center order-1 lg:order-1">
      <div class="relative w-full max-w-[503px] aspect-[503/461] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          class="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Hero Text Content (below image on mobile, right on desktop) -->
    <div class="flex flex-col gap-6 items-start justify-center order-2 lg:order-2 max-w-[513px]">

      <!-- Contact Info -->
      <div class="font-krub text-greenmip-light-bg text-base md:text-lg">
        <a href="tel:{CONTACT.phoneDial}" class="hover:text-greenmip-bright transition-colors underline decoration-solid underline-offset-4">
          {hero.callLabel} <span class="font-medium">{CONTACT.phoneDisplay}</span>
        </a>
      </div>

      <!-- Title (H1) -->
      <h1 class="font-inter font-bold text-3xl md:text-[48px] leading-tight md:leading-[56px] text-white tracking-tight">
        {hero.title}
      </h1>

      <!-- Caption -->
      <p class="font-krub text-greenmip-light-bg/90 text-base md:text-base leading-[32px]">
        {hero.body}
      </p>

      <!-- CTA Button -->
      <CtaButton label={hero.cta.label} onclick={() => scrollToSection('contacto')} />

    </div>
  </div>
</section>
