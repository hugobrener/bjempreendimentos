window.addEventListener('scroll', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const nav = document.querySelector('nav');

    if (window.pageYOffset > headerHeight) {
      nav.style.position = 'fixed';
      nav.style.top = '0';
    } else {
      nav.style.position = 'sticky';
      nav.style.top = '';
    }
  });
