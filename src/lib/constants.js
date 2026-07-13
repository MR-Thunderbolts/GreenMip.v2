export const CONTACT = {
  phoneDisplay: '+56 9 0000 0000',
  phoneDial: '+56900000000',
  whatsappNumber: '56900000000',
  email: 'contacto@example.com',
};

export function whatsappUrl(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
