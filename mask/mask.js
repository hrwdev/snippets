const container = document.querySelector('#whats');
const circleLeft = document.querySelector('#circle-left');
const circleRight = document.querySelector('#circle-right');

function recenterBinoculars() {
  const bound = container.getBoundingClientRect();
  const center = window.innerHeight / 2;
  const y = center - bound.top;
  circleLeft.setAttribute('cy', y);
  circleRight.setAttribute('cy', y);
}

function resizeBinoculars() {
  const container = document.querySelector('#whats');
  const bound = container.getBoundingClientRect();
  const x = bound.width * .28;
  circleLeft.setAttribute('cx', x);
  circleLeft.setAttribute('r', x);
  circleRight.setAttribute('cx', bound.width - x);
  circleRight.setAttribute('r', x);
}

/**
 * Change vertical position of binocular mask relative to SVG when scrolling.
 */
document.addEventListener('scroll', recenterBinoculars, {passive: true});

recenterBinoculars();

/**
 * Change size of binocular circles on resize.
 */
window.addEventListener("resize", resizeBinoculars);

resizeBinoculars();