<script>
  import Card from '../ui/Card.svelte';
  import Container from '../ui/Container.svelte';
  import { advantages } from '../../content/advantages.content.js';
</script>

<section id="ventajas" class="bg-greenmip-sage w-full py-16 md:py-24 text-white text-center">
  <Container class="flex flex-col gap-12">

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
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
      {#each advantages.items as item}
        <Card variant="elevated" class="text-greenmip-forest px-6 py-8 flex flex-col items-start justify-center text-left shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="flex flex-col gap-3">
            <h3 class="font-inter font-bold text-xl text-ink tracking-tight">
              {item.title}
            </h3>
            <p class="font-krub text-sm text-body-strong">
              {item.body}
            </p>
          </div>
        </Card>
      {/each}
    </div>

  </Container>
</section>
