<script>
  let { variant = 'flat', as = 'div', class: className = '', children } = $props();

  const variants = {
    flat: 'bg-white',
    bordered: 'bg-white border border-greenmip-border',
    'bordered-sage': 'bg-white border border-greenmip-sage',
    elevated: 'bg-white shadow-lg',
    'bordered-soft': 'bg-white border border-greenmip-border/30 shadow-sm hover:shadow-md hover:border-greenmip-sage/40 transition-all duration-300',
  };
</script>

<svelte:element this={as} class="card rounded-2xl {variants[variant]} {className}">
  {@render children()}
</svelte:element>
