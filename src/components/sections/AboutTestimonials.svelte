<script>
  import Tag from '../ui/Tag.svelte';
  import Carousel from '../ui/Carousel.svelte';
  import { about } from '../../content/about.content.js';
</script>

<section id="sobre-isaac" class="bg-white w-full py-16 md:py-24 px-4 md:px-12 lg:px-48">
  <div class="container mx-auto flex flex-col gap-20">

    <!-- Row 1: About Advisor -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center">

      <!-- Photo side (Left on desktop) -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="border border-greenmip-forest/20 p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white max-w-[456px] w-full">
          <div class="rounded-2xl overflow-hidden shadow-inner aspect-[423/383]">
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
      <div class="lg:col-span-7 flex flex-col gap-5 items-start max-w-[575px]">

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
          <span class="font-inter font-bold text-xs tracking-[0.06em] text-greenmip-olive uppercase">
            {about.categoriesLabel}
          </span>
          <div class="flex flex-wrap gap-2">
            {#each about.categories as category}
              <Tag label={category} kind="chip" variant="olive-solid" />
            {/each}
          </div>
        </div>

        <!-- LinkedIn Link -->
        <a
          href={about.advisor.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 mt-4 hover:opacity-80 transition-opacity font-inter font-semibold text-greenmip-forest text-sm"
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
              <blockquote class="bg-white border border-greenmip-border rounded-2xl pt-8 pb-6 px-5 flex flex-col gap-4 shrink-0 w-[90%] snap-start">
                <div class="inline-flex self-start px-3 py-1 rounded-full border-[0.75px] border-greenmip-sage">
                  <span class="font-inter font-bold text-[11px] text-greenmip-sage uppercase tracking-[0.06em]">
                    {about.testimonialsTitle} {i + 1}/{about.testimonials.length}
                  </span>
                </div>
                <p class="font-krub text-sm leading-[22px] text-greenmip-forest">
                  {item.quote}
                </p>
                <footer>
                  <cite class="font-krub font-bold text-base text-greenmip-forest not-italic block">
                    {item.author}
                  </cite>
                  <p class="font-krub text-xs text-greenmip-gray leading-[20px] mt-1">
                    {item.role}
                    <br />
                    {item.location}
                  </p>
                </footer>
              </blockquote>
            {/each}
          {/snippet}
        </Carousel>
      </div>

      <!-- Desktop: grid -->
      <div class="hidden lg:grid grid-cols-3 gap-6 items-stretch w-full">
        {#each about.testimonials as item}
          <blockquote class="bg-white border border-greenmip-border rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <p class="font-krub text-sm leading-[24px] text-greenmip-forest italic mb-6">
              {item.quote}
            </p>
            <footer>
              <cite class="font-krub font-bold text-base text-greenmip-forest not-italic block">
                {item.author}
              </cite>
              <p class="font-krub text-xs text-greenmip-gray leading-[20px] mt-1">
                {item.role}
                <br />
                {item.location}
              </p>
            </footer>
          </blockquote>
        {/each}
      </div>
    </div>

  </div>
</section>
