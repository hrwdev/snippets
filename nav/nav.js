/**
 * Close the navigation modal once a selection has been made.
 */
document.querySelectorAll('#sections-list a').forEach(element => {
  element.addEventListener('click', (event) => {
    document.querySelector('#nav-sections').removeAttribute('open');
  });
});

/**
 * Close the language selector if any other click is made.
 */
document.addEventListener('click', (event) => {
  if (!event.target.closest('#languages-toggle')) {
    document.querySelector('#nav-languages').removeAttribute('open');
  }
});
