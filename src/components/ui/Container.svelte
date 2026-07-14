<script>
  /**
   * Contenedor compartido (paridad V3 §0):
   * ancho máximo 1200px centrado + gutter fluido chico
   * (V3: --gutter: clamp(20px, 5vw, 156px), acotado aquí a 80px máx).
   * Reemplaza el patrón `container mx-auto` + `px-4 md:px-12 lg:px-48`.
   */
  let { class: className = '', children } = $props();
</script>

<div class="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[clamp(20px,5vw,80px)] {className}">
  {@render children?.()}
</div>
