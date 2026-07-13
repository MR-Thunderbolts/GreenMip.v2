<script>
  let { label, kind = 'eyebrow', variant = 'olive' } = $props();

  const eyebrowVariants = {
    olive: 'border-[0.857px] border-greenmip-olive/40 text-greenmip-olive',
    forest: 'border-[0.857px] border-greenmip-forest text-greenmip-forest',
    white: 'border border-white text-white',
  };

  const chipVariants = {
    olive: 'border border-greenmip-sage text-greenmip-gray',
    'olive-solid': 'border border-greenmip-sage bg-white text-greenmip-sage',
  };
</script>

{#if kind === 'eyebrow'}
  <div class="inline-flex px-[14.562px] py-[5.654px] rounded-full {eyebrowVariants[variant]}">
    <span class="font-inter font-bold text-xs tracking-[0.06em] uppercase">
      {label}
    </span>
  </div>
{:else}
  <div class="inline-flex px-[12.324px] py-[4.785px] rounded-full {chipVariants[variant]}">
    <span class="font-krub font-medium text-xs">
      {label}
    </span>
  </div>
{/if}
