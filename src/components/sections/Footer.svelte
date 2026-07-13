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
        <a href="tel:{CONTACT.phoneDial}" class="font-krub font-medium text-base text-white/90 hover:text-greenmip-bright hover:underline transition-all">
          {CONTACT.phoneDisplay}
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
        <div class="relative w-[212px] h-[68px] border border-white/30 rounded-lg flex items-center p-2 bg-greenmip-dark-bg/60 backdrop-blur-sm overflow-hidden select-none">
          <div class="absolute left-2 w-10 h-10 flex items-center justify-center">
            <img src="/assets/co2-seal-bg.svg" alt="" class="absolute w-full h-full opacity-20" />
            <img src="/assets/co2-seal-leaf.svg" alt="" class="w-6 h-6 z-10" />
          </div>
          <img src="/assets/footer-line.svg" alt="" class="absolute left-14 top-1.5 bottom-1.5 h-[80%] opacity-30" />
          <div class="ml-14 flex flex-col justify-center items-start text-left">
            <p class="font-bold text-xs text-white leading-[14px]">
              {footer.co2Seal.value} de CO<sub>2</sub> <span class="font-normal text-[10px]">{footer.co2Seal.unitLabel}</span>
            </p>
            <p class="text-[10px] font-bold text-white/80 mt-0.5 leading-[10px]">
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
        © {new Date(Date.now()).getFullYear()} Todos los derechos reservados. {footer.developedByLabel}
        <a href={footer.developedByUrl} target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-greenmip-bright transition-colors">
          {footer.developedByName}
        </a>
      </p>
    </div>

  </div>
</footer>
