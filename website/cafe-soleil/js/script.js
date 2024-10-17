/* ===========================================
 * LOADING ローディング画面からの画面遷移
 * ======================================== */
const loadingArea = document.querySelector('.loading');

window.addEventListener('load', () => {
  loadingArea.animate (
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});


/* ===========================================
 * MENU メニュー
 * ======================================== */
const targets = document.getElementsByClassName('fade');

for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer, options) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
    observer.unobserve(entries[j].target);
   }
  }
 });

 const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3, //要素が30%以上画面内に表示された場合
};

 observer.observe(targets[i]);
}

/* ===========================================
 * GALLERY ギャラリー
 * ======================================== */
document.addEventListener('DOMContentLoaded', function () {
  new Zooming({
    // options...
  }).listen('.img-zoomable')
})