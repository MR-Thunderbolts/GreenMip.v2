<script>
  import { ICONS } from '../../lib/icons.js';

  let { name, class: className = 'w-6 h-6' } = $props();
</script>

<svg viewBox="0 -960 960 960" fill="currentColor" class={className} aria-hidden="true">
  <path d={ICONS[name]} />
</svg>
