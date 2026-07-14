<script>
  import Tag from '../ui/Tag.svelte';
  import Card from '../ui/Card.svelte';
  import Carousel from '../ui/Carousel.svelte';
  import Container from '../ui/Container.svelte';
  import { about } from '../../content/about.content.js';
</script>

<section id="sobre-isaac" class="bg-white w-full py-16 md:py-24">
  <Container class="flex flex-col gap-20">

    <!-- Row 1: About Advisor -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Photo side (Left on desktop): framed card on mobile (V2 original), flush single image on desktop (paridad V3) -->
      <div class="flex justify-center w-full">
        <div class="border border-greenmip-forest/20 p-4 rounded-2xl shadow-inner w-full lg:p-0 lg:border-0 lg:shadow-none lg:rounded-3xl">
          <div class="rounded-2xl overflow-hidden border border-[#e5e7eb] aspect-[423/383] w-full lg:rounded-3xl">
            <img
              src={about.advisor.photo.src}
              alt={about.advisor.photo.alt}
              class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Info side (Right on desktop) -->
      <div class="flex flex-col gap-5 items-start max-w-[575px]">

        <Tag label={about.advisor.tag} />

        <!-- Title -->
        <h2 class="font-inter font-bold text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] text-greenmip-forest tracking-[-0.03em]">
          {about.advisor.title}
        </h2>

        <!-- Description -->
        <p class="font-krub text-greenmip-gray text-base leading-[28px]">
          {about.advisor.body}
        </p>

        <!-- Categories -->
        <div class="flex flex-col gap-2 mt-2 w-full">
          <span class="font-inter font-bold text-[10px] uppercase tracking-[0.05em] text-muted">
            {about.categoriesLabel}
          </span>
          <div class="flex flex-wrap gap-2">
            {#each about.categories as category}
              <Tag label={category} kind="chip" variant="sage-outline" />
            {/each}
          </div>
        </div>

        <!-- LinkedIn Link -->
        <a
          href={about.advisor.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 mt-4 hover:text-greenmip-forest/70 transition-colors duration-200 font-inter font-semibold text-greenmip-forest text-sm"
        >
          <img src="/assets/linkedin-icon.svg" alt="" class="w-4 h-4" />
          <span>Ver perfil en LinkedIn</span>
        </a>

      </div>

    </div>

    <!-- Row 2: Testimonials -->
    <div class="flex flex-col gap-8 items-center mt-8">
      <h3 class="font-inter font-semibold text-2xl text-greenmip-forest tracking-tight text-center">
        {about.testimonialsTitle}
      </h3>

      <!-- Mobile: carousel -->
      <div class="lg:hidden w-full">
        <Carousel itemCount={about.testimonials.length} dotVariant="on-light">
          {#snippet children()}
            {#each about.testimonials as item, i}
              <Card as="blockquote" variant="bordered-sage" class="p-8 flex flex-col gap-4 justify-between items-start shrink-0 w-[90%] snap-start">
                <Tag label="{about.testimonialsTitle} {i + 1}/{about.testimonials.length}" variant="sage" />
                <p class="font-krub text-sm text-body-strong leading-[1.6]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer>
                  <cite class="font-inter font-bold text-sm text-ink not-italic block">
                    {item.author}
                  </cite>
                  <p class="font-inter text-xs text-body leading-[1.4] mt-1">
                    {item.role}
                    <br />
                    {item.location}
                  </p>
                </footer>
              </Card>
            {/each}
          {/snippet}
        </Carousel>
      </div>

      <!-- Desktop: grid -->
      <div class="hidden lg:grid grid-cols-3 gap-6 items-stretch w-full">
        {#each about.testimonials as item}
          <Card as="blockquote" variant="bordered-sage" class="p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <p class="font-krub text-sm text-body-strong leading-[1.6] mb-6">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer>
              <cite class="font-inter font-bold text-sm text-ink not-italic block">
                {item.author}
              </cite>
              <p class="font-inter text-xs text-body leading-[1.4] mt-1">
                {item.role}
                <br />
                {item.location}
              </p>
            </footer>
          </Card>
        {/each}
      </div>
    </div>

  </Container>
</section>
