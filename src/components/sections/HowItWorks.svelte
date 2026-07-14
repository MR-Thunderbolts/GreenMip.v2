<script>
  import Tag from '../ui/Tag.svelte';
  import { howItWorks } from '../../content/howItWorks.content.js';
</script>

<section id="como-funciona" class="bg-white w-full py-16 md:py-24 px-4 md:px-12 lg:px-48">
  <div class="container mx-auto flex flex-col gap-12">

    <!-- Section Header -->
    <div class="flex flex-col gap-4 items-start max-w-[500px]">
      <Tag label={howItWorks.eyebrow} variant="forest" />
      <h2 class="font-inter font-bold text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] text-greenmip-forest tracking-[-0.03em]">
        {howItWorks.title}
      </h2>
      <p class="font-krub text-greenmip-olive text-lg md:text-xl leading-[28px]">
        {howItWorks.subtitle}
      </p>
    </div>

    <!-- Steps Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-4">
      {#each howItWorks.steps as step}
        <div class="flex flex-col justify-between bg-white border border-greenmip-border/30 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-greenmip-sage/40 transition-all duration-300">

          <!-- Text Content -->
          <div class="flex flex-col gap-3 items-start mb-6">
            <!-- Step Number -->
            <span class="font-inter font-bold text-greenmip-olive text-xs tracking-[0.06em]">
              {step.num}
            </span>
            <h3 class="font-inter font-bold text-xl text-greenmip-forest leading-[24px]">
              {step.title}
            </h3>
            <p class="font-krub text-greenmip-olive text-base leading-[24px]">
              {step.body}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-2">
              {#each step.tags as tag}
                <Tag label={tag} kind="chip" />
              {/each}
            </div>
          </div>

          <!-- Image -->
          <div class="w-full h-[185px] rounded-2xl overflow-hidden border border-black/5 mt-auto">
            <img
              src={step.image.src}
              alt={step.image.alt}
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
