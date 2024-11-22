const btn = document.querySelector('.header__btn');

btn.addEventListener('click', () => {
  const navId = btn.getAttribute('aria-controls');
  const nav = document.getElementById(navId);
  const ariaHidden = nav.getAttribute('aria-hidden');
  const hamburger = document.querySelector('.open');

  hamburger.classList.toggle('close');

  if (ariaHidden === 'true') {
    nav.setAttribute('aria-hidden', 'false');
    nav.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('aria-hidden', 'true');
    nav.setAttribute('aria-expanded', 'false');
  }
});