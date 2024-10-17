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