<script>
  import Tag from '../ui/Tag.svelte';
  import Container from '../ui/Container.svelte';
  import { howItWorks } from '../../content/howItWorks.content.js';
</script>

<section id="como-funciona" class="bg-white w-full py-16 md:py-24">
  <Container class="flex flex-col gap-12">

    <!-- Section Header -->
    <div class="flex flex-col gap-4 items-start max-w-[500px]">
      <span class="font-inter font-bold text-[10px] uppercase tracking-[0.05em] text-[#365C48]">
        {howItWorks.eyebrow}
      </span>
      <h2 class="font-inter font-bold text-[32px] md:text-[40px] leading-[1.1] text-ink tracking-[-1px]">
        {howItWorks.title}
      </h2>
      <p class="font-krub text-body text-lg md:text-xl leading-[28px]">
        {howItWorks.subtitle}
      </p>
    </div>

    <!-- Steps Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-4">
      {#each howItWorks.steps as step}
        <div class="flex flex-col justify-between">

          <!-- Text Content -->
          <div class="flex flex-col gap-3 items-start mb-6">
            <!-- Step Number + Title -->
            <div class="flex flex-row items-start gap-3">
              <span class="font-inter font-medium text-base text-muted">
                {step.num}
              </span>
              <h3 class="font-inter font-bold text-xl text-ink leading-[24px]">
                {step.title}
              </h3>
            </div>
            <p class="font-krub text-body text-base leading-[24px]">
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
          <div class="w-full h-[185px] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] mt-auto">
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

  </Container>
</section>
