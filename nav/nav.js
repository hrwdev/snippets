/**
 * Close the navigation menu once a selection has been made.
 */
document.querySelectorAll('#sections-list a').forEach(element => {
  element.addEventListener('click', (event) => {
    document.querySelector('#nav-sections').removeAttribute('open');
  });
});

/**
 * Close the language selector if any outside click is made.
 */
document.addEventListener('click', (event) => {
  if (!event.target.closest('#nav-languages')) {
    document.querySelector('#nav-languages').removeAttribute('open');
  }
});

/**
 * Close all details elements when Esc key is pressed.
 */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('#nav-sections').removeAttribute('open');
    document.querySelector('#nav-languages').removeAttribute('open');
  }
});

