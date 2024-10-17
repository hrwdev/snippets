const container = document.querySelector('#mask-container');
const circleLeft = document.querySelector('#circle-left');
const circleRight = document.querySelector('#circle-right');
const outlineLeft = document.querySelector('#outline-left');
const outlineRight = document.querySelector('#outline-right');

function recenterBinoculars() {
  const bound = container.getBoundingClientRect();
  const center = window.innerHeight / 2;
  const y = center - bound.top;
  circleLeft.setAttribute('cy', y);
  outlineLeft.setAttribute('cy', y);
  circleRight.setAttribute('cy', y);
  outlineRight.setAttribute('cy', y);
}

function resizeBinoculars() {
  const container = document.querySelector('#mask-container');
  const bound = container.getBoundingClientRect();
  const x = bound.width * .3;
  const r = bound.width * .25;
  const circumfrence = r * 2 * 3.141592654;
  const strokeLength = circumfrence * 0.795;
  const dasharray = strokeLength + ' ' + (circumfrence - strokeLength);
  circleLeft.setAttribute('cx', x);
  circleLeft.setAttribute('r', r);
  outlineLeft.setAttribute('cx', x);
  outlineLeft.setAttribute('r', r);
  outlineLeft.setAttribute('stroke-dasharray', dasharray);
  outlineLeft.setAttribute('stroke-dashoffset', circumfrence / -9.76);
  circleRight.setAttribute('cx', bound.width - x);
  circleRight.setAttribute('r', r);
  outlineRight.setAttribute('cx', bound.width - x);
  outlineRight.setAttribute('r', r);
  outlineRight.setAttribute('stroke-dasharray', dasharray);
  outlineRight.setAttribute('stroke-dashoffset', circumfrence / 2.515);
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