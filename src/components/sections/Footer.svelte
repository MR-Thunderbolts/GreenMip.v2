<script>
  import { scrollToSection } from '../../lib/scroll.js';
  import { CONTACT } from '../../lib/constants.js';
  import { footer } from '../../content/footer.content.js';
</script>

<footer class="bg-greenmip-dark-bg relative overflow-hidden w-full py-12 md:py-16 px-4 md:px-12 lg:px-48 text-white">
  <!-- Background texture overlay -->
  <div class="absolute inset-0 z-0 pointer-events-none opacity-10">
    <img src="/assets/footer-bg-texture.svg" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="container mx-auto flex flex-col gap-12 relative z-10">

    <!-- Top section with columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

      <!-- Column 1: Logo & Summary -->
      <div class="lg:col-span-3 flex flex-col gap-4 items-start max-w-[264px]">
        <img src={footer.logo.src} alt={footer.logo.alt} class="h-[30px]" />
        <p class="font-krub font-medium text-xs leading-[24px] text-white/90">
          {footer.summary}
        </p>
      </div>

      <!-- Column 2: Navigation -->
      <div class="lg:col-span-3 flex flex-col gap-3 items-start">
        <h4 class="font-inter font-bold text-xs tracking-[0.06em] text-white uppercase mb-1">
          {footer.navTitle}
        </h4>
        {#each footer.navLinks as link}
          <a
            href="#{link.id}"
            onclick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
            class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright transition-colors text-left cursor-pointer"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- Column 3: Contact & Socials -->
      <div class="lg:col-span-3 flex flex-col gap-3 items-start">
        <h4 class="font-inter font-bold text-xs tracking-[0.06em] text-white uppercase mb-1">
          {footer.contactTitle}
        </h4>
        <a href="tel:{footer.contactPhoneDial}" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all">
          {footer.contactPhoneDisplay}
        </a>
        <a href="mailto:{CONTACT.email}" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all break-all">
          {CONTACT.email}
        </a>
        {#each footer.socials as social}
          <a href={social.url} target="_blank" rel="noopener noreferrer" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all">
            {social.label}
          </a>
        {/each}
      </div>

      <!-- Column 4: Certifications & Sello CO2 -->
      <div class="lg:col-span-3 flex flex-col gap-4 items-start">
        <h4 class="font-inter font-bold text-xs tracking-[0.06em] text-white uppercase">
          {footer.certificationTitle}
        </h4>
        <p class="font-krub font-semibold text-base text-greenmip-bright leading-[28px]">
          {footer.certificationText}
        </p>

        <img src={footer.certificationImage.src} alt={footer.certificationImage.alt} class="h-20 w-auto rounded-md object-contain" loading="lazy" />

        <!-- Sello CO2 -->
        <div class="relative w-fit max-w-full border border-greenmip-light-bg rounded-lg flex items-center gap-2.5 pl-2.5 pr-3 py-2.5 bg-white select-none">
          <div class="w-10 h-10 shrink-0 flex flex-col items-center justify-center gap-0.5 overflow-hidden">
            <img src="/assets/co2-seal-icon.svg" alt="" class="w-6 h-6 object-contain" />
            <img src="/assets/co2-seal-wordmark.svg" alt="" class="w-7 h-2 object-contain" />
          </div>
          <div class="flex flex-col items-start text-left">
            <p class="font-bold text-sm text-[#191E31] leading-5">
              {footer.co2Seal.value} de CO<sub>2</sub> <span class="font-bold text-[9px]">{footer.co2Seal.unitLabel}</span>
            </p>
            <p class="text-[9px] font-bold text-[#191E31] leading-none mt-0.5">
              {footer.co2Seal.caption}
            </p>
          </div>
        </div>
      </div>

    </div>

    <!-- Divider -->
    <div class="w-full h-px bg-white/10 mt-4"></div>

    <!-- Bottom section: Copyright -->
    <div class="text-center font-krub font-semibold text-xs text-white/80 leading-[24px]">
      <p>
        © {new Date(Date.now()).getFullYear()} GreenMIP. Todos los derechos reservados. {footer.developedByLabel}
        <a href={footer.developedByUrl} target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-greenmip-bright transition-colors">
          {footer.developedByName}
        </a>
      </p>
    </div>

  </div>
</footer>
