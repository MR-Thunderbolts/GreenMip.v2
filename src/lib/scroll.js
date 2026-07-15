// ease-in-out: arranque y frenado graduales, sin el salto brusco de un ease-out puro
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  // Distancias largas duran más, cortas duran menos, dentro de un rango razonable
  const dur = duration ?? Math.min(1100, Math.max(500, Math.abs(distance) * 0.6));
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / dur, 1);
    window.scrollTo({ top: startY + distance * easeInOutCubic(progress), behavior: 'instant' });
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function scrollToSection(id, duration) {
  const element = document.getElementById(id);
  if (!element) return;
  const offset = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
  animateScrollTo(targetY, duration);
}

export function scrollToTop(duration) {
  animateScrollTo(0, duration);
}
