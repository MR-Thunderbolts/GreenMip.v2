<script>
  import { CONTACT, whatsappUrl } from '../../lib/constants.js';
  import Tag from '../ui/Tag.svelte';
  import Icon from '../ui/Icon.svelte';
  import { contact } from '../../content/contact.content.js';

  let name = $state('');
  let email = $state('');
  let company = $state('');
  let region = $state('');
  let crop = $state('');
  let hectares = $state('');
  let message = $state('');

  function handleSubmit() {
    if (!name || !email || !region || !crop) {
      alert('Por favor completa todos los campos requeridos (*)');
      return;
    }

    const formattedMessage =
      `${contact.whatsappIntro}\n\n` +
      `*Nombre:* ${name}\n` +
      `*Correo:* ${email}\n` +
      `*Empresa/Predio:* ${company || 'No especificado'}\n` +
      `*Región:* ${region}\n` +
      `*Cultivo Principal:* ${crop}\n` +
      `*Número de Hectáreas:* ${hectares || 'No especificado'}\n` +
      `*Mensaje:* ${message || 'Sin comentarios adicionales'}`;

    window.open(whatsappUrl(formattedMessage), '_blank');
  }
</script>

<section id="contacto" class="bg-white w-full py-16 md:py-24 px-4 md:px-12 lg:px-48">
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

    <!-- Left Column: Contact Info -->
    <div class="lg:col-span-5 flex flex-col gap-6 items-start max-w-[345px]">

      <Tag label={contact.tag} variant="forest" />

      <!-- Title -->
      <h2 class="font-inter font-bold text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] text-greenmip-forest tracking-[-0.03em]">
        {contact.title}
      </h2>

      <!-- Description -->
      <p class="font-krub text-greenmip-forest text-sm md:text-base leading-[24px]">
        {contact.body}
      </p>

      <!-- WhatsApp Link card -->
      <div class="flex gap-4 items-center mt-4">
        <div class="border border-greenmip-bright/20 flex items-center justify-center p-2 bg-greenmip-bright/10 rounded-full w-12 h-12 shadow-sm">
          <img src="/assets/whatsapp-icon.svg" alt="" class="w-5 h-5" />
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-inter font-bold text-xs tracking-[0.06em] text-greenmip-forest uppercase">
            {contact.whatsappLabel}
          </span>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" class="font-krub font-semibold text-sm text-greenmip-forest underline underline-offset-2 hover:opacity-85 transition-opacity">
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      <!-- Email Link card -->
      <div class="flex gap-4 items-center">
        <div class="border border-greenmip-forest/5 flex items-center justify-center p-2 bg-greenmip-bright/10 rounded-full w-12 h-12 shadow-sm">
          <Icon name="mail" class="w-5 h-5 text-greenmip-forest" />
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-inter font-bold text-xs tracking-[0.06em] text-greenmip-forest uppercase">
            {contact.emailLabel}
          </span>
          <a href="mailto:{CONTACT.email}" class="font-krub font-semibold text-sm text-greenmip-forest underline underline-offset-2 hover:opacity-85 transition-opacity">
            {CONTACT.email}
          </a>
        </div>
      </div>

    </div>

    <!-- Right Column: Contact Form Card -->
    <div class="lg:col-span-7 bg-greenmip-light-bg border border-greenmip-border p-6 md:p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] w-full">
      <h3 class="font-inter font-bold text-xl md:text-2xl text-greenmip-forest tracking-tight mb-6">
        {contact.formTitle}
      </h3>

      <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="flex flex-col gap-6">
        <!-- Row 1: Name and Email -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label for="name" class="font-krub font-semibold text-sm text-greenmip-forest">Nombre*</label>
            <input
              id="name"
              type="text"
              bind:value={name}
              placeholder="Tu nombre"
              required
              class="input input-bordered w-full h-[40px] rounded-lg border-greenmip-border focus:border-greenmip-forest focus:outline-none bg-white text-greenmip-forest text-sm"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="email" class="font-krub font-semibold text-sm text-greenmip-forest">Correo electrónico*</label>
            <input
              id="email"
              type="email"
              bind:value={email}
              placeholder="Tu correo electrónico"
              required
              class="input input-bordered w-full h-[40px] rounded-lg border-greenmip-border focus:border-greenmip-forest focus:outline-none bg-white text-greenmip-forest text-sm"
            />
          </div>
        </div>

        <!-- Row 2: Company and Region -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label for="company" class="font-krub font-semibold text-sm text-greenmip-forest">Empresa / Predio</label>
            <input
              id="company"
              type="text"
              bind:value={company}
              placeholder="Nombre de la empresa o predio"
              class="input input-bordered w-full h-[40px] rounded-lg border-greenmip-border focus:border-greenmip-forest focus:outline-none bg-white text-greenmip-forest text-sm"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="region" class="font-krub font-semibold text-sm text-greenmip-forest">Región*</label>
            <select
              id="region"
              bind:value={region}
              required
              class="select select-bordered w-full h-[40px] min-h-[40px] rounded-lg border-greenmip-border focus:border-greenmip-forest focus:outline-none bg-white text-greenmip-forest text-sm pl-3 pr-10"
            >
              <option value="" disabled selected>Seleccionar región</option>
              {#each contact.regions as r}
                <option value={r}>{r}</option>
              {/each}
            </select>
          </div>
        </div>

        <!-- Row 3: Crop and Hectares -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label for="crop" class="font-krub font-semibold text-sm text-greenmip-forest">Cultivo principal*</label>
            <select
              id="crop"
              bind:value={crop}
              required
              class="select select-bordered w-full h-[40px] min-h-[40px] rounded-lg border-greenmip-border focus:border-greenmip-forest focus:outline-none bg-white text-greenmip-forest text-sm pl-3 pr-10"
            >
              <option value="" disabled selected>Seleccionar cultivo</option>
              {#each contact.crops as c}
                <option value={c}>{c}</option>
              {/each}
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="hectares" class="font-krub font-semibold text-sm text-greenmip-forest">Número de hectáreas</label>
            <input
              id="hectares"
              type="number"
              bind:value={hectares}
              placeholder="Ingresa el número de hectáreas"
              min="0"
              class="input input-bordered w-full h-[40px] rounded-lg border-greenmip-border focus:border-greenmip-forest focus:outline-none bg-white text-greenmip-forest text-sm"
            />
          </div>
        </div>

        <!-- Row 4: Message -->
        <div class="flex flex-col gap-1.5 w-full">
          <label for="message" class="font-krub font-semibold text-sm text-greenmip-forest">
            Mensaje <span class="font-medium text-greenmip-gray text-xs">(Opcional)</span>
          </label>
          <textarea
            id="message"
            bind:value={message}
            placeholder="¿Alguna situación específica que quieras comentar?"
            class="textarea textarea-bordered w-full min-h-[80px] rounded-lg border-greenmip-border focus:border-greenmip-forest focus:outline-none bg-white text-greenmip-forest text-sm p-3"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="btn bg-greenmip-bright hover:bg-greenmip-bright/80 text-greenmip-forest font-semibold text-base py-2 rounded-lg border-none shadow hover:shadow-md transition-all duration-200"
        >
          {contact.submitLabel}
        </button>

        <!-- Footnote -->
        <div class="text-center">
          <p class="font-krub font-medium text-xs text-greenmip-olive">
            {contact.footnote}
          </p>
        </div>

      </form>
    </div>

  </div>
</section>
