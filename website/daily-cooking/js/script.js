// ヘッダー背景色切り替え
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const scrollThreshold = window.innerHeight * 0.9; // 90vhまでスクロール
  if (window.scrollY > scrollThreshold) {
      header.style.backgroundColor = '#2b2a27'; // 背景色を変更
  } else {
      header.style.backgroundColor = 'transparent'; // 背景色を元に戻す
  }
});