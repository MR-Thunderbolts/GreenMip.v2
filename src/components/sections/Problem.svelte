<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import Tag from '../ui/Tag.svelte';
  import Icon from '../ui/Icon.svelte';
  import Container from '../ui/Container.svelte';
  import { problem } from '../../content/problem.content.js';
</script>

<section id="problema" class="bg-white w-full py-16 md:py-24">
  <Container class="flex flex-col gap-12 md:gap-16">

    <!-- Top Introduction Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      <!-- Text (Left side on desktop) -->
      <div class="flex flex-col gap-6 items-start">

        <Tag label={problem.tag} />

        <!-- Title -->
        <h2 class="font-inter font-bold text-[32px] md:text-[40px] leading-[1.1] text-ink tracking-[-1px] max-w-[560px]">
          {problem.title}
        </h2>

        <!-- Action link -->
        <button
          onclick={() => scrollToSection('servicios')}
          class="font-krub font-semibold text-base text-greenmip-forest hover:text-greenmip-forest/80 transition-colors cursor-pointer group flex items-center gap-1 underline underline-offset-2"
        >
          {problem.learnMoreLabel} <span class="no-underline group-hover:translate-x-1 transition-transform">&gt;</span>
        </button>

      </div>

      <!-- Image (Right side on desktop) -->
      <div class="flex justify-center">
        <div class="relative w-full aspect-[458/286] rounded-[28px] overflow-hidden shadow-lg">
          <img
            src={problem.image.src}
            alt={problem.image.alt}
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

    </div>

    <!-- Key Pain Points Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-4">
      {#each problem.points as point}
        <div class="flex flex-col gap-3 items-start">
          <Icon name={point.icon} class="w-8 h-8 text-greenmip-sage" />
          <h3 class="font-inter font-bold text-xl text-ink">
            {point.title}
          </h3>
          <p class="font-krub text-body text-base leading-[24px]">
            {point.body}
          </p>
        </div>
      {/each}
    </div>

  </Container>
</section>
