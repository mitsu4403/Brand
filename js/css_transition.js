// ページのDOMコンテンツが読み込まれたら実行
document.addEventListener('DOMContentLoaded', (event) => {
  // .main-imageクラスを持つHTML要素を取得
  const mainImage = document.querySelector('.main-image');
  
  // 取得した要素に.fade-inクラスを追加
  // これにより、CSSの.main-image.fade-inルールが適用され、opacityが0から1に変化する
  mainImage.classList.add('fade-in'); 
});