import { categories } from './shared.content.js';

export const about = {
  advisor: {
    tag: 'El especialista',
    title: 'Soy Isaac Vera, tu aliado en el campo',
    body: 'Técnico agrícola con más de 13 años de experiencia en Manejo Integrado de Plagas. Mi objetivo es simple: que cuentes con información clara para tomar decisiones acertadas en el momento oportuno. Sin teoría. Datos de tu campo en tus manos.',
    photo: { src: '/assets/isaac-vera.png', alt: 'Isaac Vera' },
    linkedinUrl: '#',
  },
  categoriesLabel: 'CULTIVOS ATENDIDOS',
  categories,
  testimonialsTitle: 'Qué dicen mis clientes',
  testimonials: [
    {
      quote: 'Antes nos costaba aplicar acaricidas a tiempo, porque nuestro monitoreo interno era poco práctico y la información llegaba tarde. Esto complicaba la toma de decisiones y elevaba los costos cuando las poblaciones de ácaros crecían demasiado. Con el apoyo técnico y las recomendaciones de Isaac, logramos anticiparnos a los problemas, optimizar el control de ácaros fitófagos y reducir nuestros costos.',
      author: 'Allen Vega',
      role: 'Administrador Agrícola, G y A.',
      location: 'Curacaví, Región Metropolitana.',
    },
    {
      quote: 'En nuestros mandarinos y paltos hemos enfrentado distintas plagas de importancia económica. El sistema de monitoreo e informes de Isaac, con mapas y gráficos fáciles de interpretar, nos ayuda mucho a seguir las plagas y evaluar las aplicaciones. Tener información clara y oportuna nos ha permitido optimizar la gestión fitosanitaria.',
      author: 'Luis Chávez',
      role: 'Administrador, Agrícola Olivia.',
      location: 'Salamanca, Región de Coquimbo.',
    },
    {
      quote: 'Hemos trabajado en conjunto con Isaac brindando soporte técnico a productores de paltos en distintas zonas del país. Su capacidad para generar información confiable sumado a nuestras sugerencias de control ha sido un aporte de gran valor para nuestros clientes. Destaco su compromiso, profesionalismo y conocimiento técnico, es nuestro aliado técnico para cualquier asesoría MIP.',
      author: 'Pamela Gjuranovic',
      role: 'Asesor Técnico Comercial, Koppert Chile.',
      location: 'Santiago, Región Metropolitana.',
    },
  ],
};
