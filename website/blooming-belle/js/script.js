// menu
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-btn');
  const headerNavi = document.querySelector('.header-navi');

  menuButton.addEventListener('click', () => {
      headerNavi.classList.toggle('view');
  });
});

// splide
var splide = new Splide( '.splide', {
  type   : 'loop',
  padding: '3rem',
  autoplay: 'true',
} );

splide.mount();

// zooming
document.addEventListener('DOMContentLoaded', function () {
  const zooming = new Zooming({
    bgColor: 'rgb(0, 0, 0)',
    bgOpacity: 0.8,
  })

  zooming.listen('.img-zoomable')
})