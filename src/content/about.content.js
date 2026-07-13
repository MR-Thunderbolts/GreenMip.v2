import { categories } from './shared.content.js';

export const about = {
  advisor: {
    tag: 'Asesor',
    title: 'Lorem ipsum, dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc.',
    photo: { src: '/assets/placeholder-image.svg', alt: 'Imagen de referencia' },
    linkedinUrl: '#',
  },
  categoriesLabel: 'CATEGORÍAS',
  categories,
  testimonialsTitle: 'Qué dicen nuestros clientes',
  testimonials: [
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.',
      author: 'Nombre Apellido',
      role: 'Cargo, Empresa.',
      location: 'Ciudad, Región.',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.',
      author: 'Nombre Apellido',
      role: 'Cargo, Empresa.',
      location: 'Ciudad, Región.',
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.',
      author: 'Nombre Apellido',
      role: 'Cargo, Empresa.',
      location: 'Ciudad, Región.',
    },
  ],
};
