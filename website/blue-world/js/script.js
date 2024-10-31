/* ===========================================
 * ローディング画面
 * ======================================== */
const loadingArea = document.querySelector('#loading');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（ぼかし画面）
  loadingArea.animate(
    {
      backdropFilter: ['blur(10px)', 'blur(0)'],
      background: ['rgba(213, 231, 242, 1)', 'rgba(213, 231, 242, 0)'],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディングテキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8, //80%
      },
      {
        opacity: 0,
        offset: 1 //100%
      },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/* ===========================================
 * フェードイン
 * ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
      root: null, // ビューポートをルートとする
      rootMargin: '0px',
      threshold: 0.1 // 要素が10％表示された時にコールバックを実行
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // 一度観察したら、観察を解除
          }
      });
  }, observerOptions);

  fadeElements.forEach(element => {
      observer.observe(element);
  });
});

/* ===========================================
 * テキストコピーボックス
 * ======================================== */

// クラスjs-copy-btnを持つ全てのボタンを取得し、それぞれのボタンに対して処理を行う
document.querySelectorAll('.js-copy-btn').forEach(button => {

  // 各ボタンにクリックイベントリスナーを追加
  //このリスナーは、ボタンがクリックされたときに実行される
  button.addEventListener('click', () => {

      //クリックされたボタンの前の要素（input要素）を取得する
      const input = button.previousElementSibling;

      //取得したinput要素のテキストを全て選択する
      //setSelectionRange(0, 99999)は、モバイルデバイスでも確実に選択範囲を設定するためのコード
      input.select();
      input.setSelectionRange(0, 99999);  // For mobile devices

      //input要素の値（テキスト）をクリップボードにコピーする
      //コピーが成功した場合にはコンソールにメッセージを表示し、失敗した場合にはエラーメッセージを表示

      navigator.clipboard.writeText(input.value)
          .then(() => {
            alert('カラーコードをコピーしました: ' + input.value);
          })
          .catch(err => {
            alert('テキストをコピーできませんでした: ', err);
          });
  });
});