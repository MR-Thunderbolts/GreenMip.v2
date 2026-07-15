<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import { CONTACT } from '../../lib/constants.js';
  import CtaButton from '../ui/CtaButton.svelte';
  import { hero } from '../../content/hero.content.js';
</script>

<section id="hero" class="relative overflow-hidden w-full bg-greenmip-dark-bg text-white">

  <div class="absolute inset-0 z-0 pointer-events-none opacity-40 bg-cover bg-center" style="background-image: url('/assets/hero-bg-texture.svg');"></div>

  <div class="lg:container lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-24 lg:items-stretch lg:px-12 lg:pt-40 lg:pb-24 relative z-10">

    <!-- Hero Image: true full-bleed on mobile (absolute, behind floating navbar), contained + rounded on desktop (stretches to match text column height) -->
    <div class="absolute top-0 left-0 w-full h-[340px] lg:static lg:h-auto lg:flex lg:justify-center lg:items-stretch lg:order-1">
      <div class="relative w-full h-full lg:aspect-auto lg:max-w-[503px] overflow-hidden lg:rounded-2xl lg:shadow-2xl lg:border lg:border-white/10">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          class="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Hero Text Content -->
    <div class="relative flex flex-col gap-6 items-start justify-center px-4 pt-[372px] pb-12 lg:p-0 lg:order-2 lg:max-w-[513px]">

      <!-- Contact Info -->
      <div class="relative z-10 font-krub text-greenmip-light-bg text-base md:text-lg">
        <a href="tel:{CONTACT.phoneDial}" class="hover:text-greenmip-light-bg/80 transition-colors duration-200 underline decoration-solid underline-offset-4">
          {hero.callLabel} <span class="font-medium">{CONTACT.phoneDisplay}</span>
        </a>
      </div>

      <!-- Title (H1) -->
      <h1 class="relative z-10 font-inter font-bold text-[32px] md:text-[40px] leading-[1.1] text-white tracking-[-1px]">
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
