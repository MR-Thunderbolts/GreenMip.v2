export const CONTACT = {
  phoneDisplay: '+56 9 23960489',
  phoneDial: '+56923960489',
  whatsappNumber: '56923960489',
  email: 'isaacvera@greenmip.cl',
};

export function whatsappUrl(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
