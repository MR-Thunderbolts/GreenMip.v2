<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import { CONTACT } from '../../lib/constants.js';
  import CtaButton from '../ui/CtaButton.svelte';
  import { hero } from '../../content/hero.content.js';
</script>

<section id="hero" class="relative overflow-hidden w-full bg-greenmip-dark-bg text-white">

  <div class="lg:container lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center lg:px-12 pt-24 md:pt-32 lg:pb-24 relative">

    <!-- Hero Image: full-bleed on mobile, contained + rounded on desktop -->
    <div class="lg:flex lg:justify-center lg:items-center lg:order-1">
      <div class="relative w-full aspect-[4/3] lg:aspect-[503/461] lg:max-w-[503px] overflow-hidden lg:rounded-2xl lg:shadow-2xl lg:border lg:border-white/10">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          class="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Hero Text Content -->
    <div class="relative flex flex-col gap-6 items-start justify-center px-4 py-12 lg:p-0 lg:order-2 lg:max-w-[513px]">

      <!-- Background texture overlay (text area only) -->
      <div class="absolute inset-0 z-0 pointer-events-none opacity-100 bg-cover bg-center" style="background-image: url('/assets/hero-bg-texture.svg'); transform: rotate(180deg);"></div>

      <!-- Contact Info -->
      <div class="relative z-10 font-krub text-greenmip-light-bg text-base md:text-lg">
        <a href="tel:{CONTACT.phoneDial}" class="hover:text-greenmip-light-bg/70 transition-colors duration-200 underline decoration-solid underline-offset-4">
          {hero.callLabel} <span class="font-medium">{CONTACT.phoneDisplay}</span>
        </a>
      </div>

      <!-- Title (H1) -->
      <h1 class="relative z-10 font-inter font-bold text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] text-white tracking-tight">
        {hero.title}
      </h1>

      <!-- Caption -->
      <p class="relative z-10 font-krub text-greenmip-light-bg/90 text-base md:text-base leading-[32px]">
        {hero.body}
      </p>

      <!-- CTA Button -->
      <div class="relative z-10">
        <CtaButton label={hero.cta.label} onclick={() => scrollToSection('contacto')} size="lg" />
      </div>

    </div>
  </div>
</section>
