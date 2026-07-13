<script>
  let { itemCount = 3, children, dotVariant = 'on-light' } = $props();

  const dotColors = {
    'on-light': 'bg-greenmip-border border-greenmip-border',
    'on-color': 'bg-greenmip-light-bg border-greenmip-light-bg',
  };
  const dotColorInactive = {
    'on-light': 'border-greenmip-border',
    'on-color': 'border-greenmip-light-bg',
  };

  let track = $state(null);
  let activeIndex = $state(0);

  function handleScroll() {
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) { activeIndex = 0; return; }
    const ratio = track.scrollLeft / maxScroll;
    activeIndex = Math.min(itemCount - 1, Math.round(ratio * (itemCount - 1)));
  }
</script>

<div class="flex flex-col gap-4">
  <div
    bind:this={track}
    onscroll={handleScroll}
    class="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-4 -mx-4 px-4 pb-1"
    style="scrollbar-width: none;"
  >
    {@render children()}
  </div>

  <div class="flex gap-2 justify-center">
    {#each Array(itemCount) as _, i}
      <span
        class="w-[11px] h-[11px] rounded-full border transition-all duration-200 {i === activeIndex
          ? dotColors[dotVariant]
          : 'bg-transparent ' + dotColorInactive[dotVariant]}"
      ></span>
    {/each}
  </div>
</div>
