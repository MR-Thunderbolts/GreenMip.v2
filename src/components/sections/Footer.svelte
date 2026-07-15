<script>
  import { scrollToSection } from "../../lib/scroll.js";
  import { CONTACT } from "../../lib/constants.js";
  import { footer } from "../../content/footer.content.js";
  import Container from "../ui/Container.svelte";
</script>

<footer
  class="bg-greenmip-dark-bg relative overflow-hidden w-full py-12 md:py-16 text-white"
>
  <!-- Background texture overlay -->
  <div
    class="absolute inset-0 z-0 pointer-events-none opacity-15"
    style="background-image: url('/assets/textura-hero-banner.svg'); background-size: cover; background-position: center;"
  ></div>

  <Container class="flex flex-col gap-12 relative z-10">
    <!-- Top section with columns -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start"
    >
      <!-- Column 1: Logo & Summary -->
      <div class="lg:col-span-3 flex flex-col gap-4 items-start max-w-[264px]">
        <img src={footer.logo.src} alt={footer.logo.alt} class="h-[30px]" />
        <p class="font-krub font-normal text-sm leading-[24px] text-white/90">
          {footer.summary}
        </p>
      </div>

      <!-- Column 2: Navigation -->
      <div class="lg:col-span-3 flex flex-col gap-3 items-start">
        <h4
          class="font-inter font-bold text-[11px] tracking-[0.06em] text-white uppercase mb-1"
        >
          {footer.navTitle}
        </h4>
        {#each footer.navLinks as link}
          <a
            href="#{link.id}"
            onclick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
            class="font-krub font-normal text-[15px] text-white/90 hover:text-greenmip-bright transition-colors text-left cursor-pointer"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- Column 3: Contact & Socials -->
      <div class="lg:col-span-3 flex flex-col gap-3 items-start">
        <h4
          class="font-inter font-bold text-[11px] tracking-[0.06em] text-white uppercase mb-1"
        >
          {footer.contactTitle}
        </h4>
        <a
          href="tel:{footer.contactPhoneDial}"
          class="font-krub font-normal text-[15px] text-white/90 underline decoration-1 underline-offset-4 hover:text-greenmip-bright transition-all"
        >
          {footer.contactPhoneDisplay}
        </a>
        <a
          href="mailto:{CONTACT.email}"
          class="font-krub font-normal text-[15px] text-white/90 underline decoration-1 underline-offset-4 hover:text-greenmip-bright transition-all break-all"
        >
          {CONTACT.email}
        </a>
        {#each footer.socials as social}
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            class="font-krub font-normal text-[15px] text-white/90 underline decoration-1 underline-offset-4 hover:text-greenmip-bright transition-all"
          >
            {social.label}
          </a>
        {/each}
      </div>

      <!-- Column 4: Certifications & Sello CO2 -->
      <div class="lg:col-span-3 flex flex-col gap-4 items-start">
        <h4
          class="font-inter font-bold text-[11px] tracking-[0.06em] text-white uppercase"
        >
          {footer.certificationTitle}
        </h4>
        <p
          class="font-krub font-medium text-[15px] text-[#cde673] leading-[28px]"
        >
          {footer.certificationText}
        </p>

        <!-- Sello CO2 / energy badge -->
        <img
          src="/assets/greenmip.cl.png"
          alt="Energy badge"
          class="max-w-[200px] w-full h-auto object-contain select-none"
        />

        <a
          href="https://ciclo17.cl"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full max-w-[200px] aspect-[250/80]"
        >
          <img
            src={footer.certificationImage.src}
            alt={footer.certificationImage.alt}
            class="w-full h-full object-contain"
            loading="lazy"
          />
        </a>
      </div>
    </div>

    <!-- Divider -->
    <div class="w-full h-px bg-white/10 mt-4"></div>

    <!-- Bottom section: Copyright -->
    <div
      class="text-center font-krub font-semibold text-xs text-white/80 leading-[24px]"
    >
      <p>
        © {new Date(Date.now()).getFullYear()} GreenMIP. Todos los derechos reservados.
        {footer.developedByLabel}
        <a
          href={footer.developedByUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="underline underline-offset-2 hover:text-greenmip-bright transition-colors"
        >
          {footer.developedByName}
        </a>
      </p>
    </div>
  </Container>
</footer>
