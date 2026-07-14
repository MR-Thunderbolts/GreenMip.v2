<script>
  let { label, onclick, type = 'button', variant = 'solid' } = $props();

  const variants = {
    solid: 'bg-primary text-primary-content hover:brightness-95 border-none shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-greenmip-forest border border-greenmip-forest/20 hover:bg-greenmip-forest/5',
  };
</script>

<button
  {type}
  {onclick}
  class="btn h-auto min-h-0 px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 {variants[variant]}"
>
  {label}
</button>
