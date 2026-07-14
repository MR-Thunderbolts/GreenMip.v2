<script>
  let { label, onclick, type = 'button', variant = 'solid', size = 'md' } = $props();

  const variants = {
    solid: 'bg-primary text-primary-content hover:brightness-95 border-none shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-greenmip-forest border border-greenmip-forest/20 hover:bg-greenmip-forest/5',
  };

  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-10 py-4 text-base min-w-[200px]',
  };
</script>

<button
  {type}
  {onclick}
  class="btn h-auto min-h-0 rounded-lg font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 {sizes[size]} {variants[variant]}"
>
  {label}
</button>
