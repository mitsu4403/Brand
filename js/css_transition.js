// ページのDOMコンテンツが読み込まれたら実行
document.addEventListener('DOMContentLoaded', (event) => {
  // .main-imageクラスを持つHTML要素を取得
  const mainImage = document.querySelector('.main-image');
  
  // 取得した要素に.fade-inクラスを追加
  // これにより、CSSの.main-image.fade-inルールが適用され、opacityが0から1に変化する
  mainImage.classList.add('fade-in'); 
});

// 画像の切り替え
document.addEventListener('DOMContentLoaded', function () {
    const imgs = Array.from(document.querySelectorAll('img[data-alt-src]'));
    if (!imgs.length) return;

    const intervalMs = 7500; // 切替間隔（ms）をここで調整
    const fadeMs = 300;      // CSS の transition と合わせるフェード時間（ms）

    // 初期化：元の src を保存し、代替画像をプリロード
    imgs.forEach(img => {
        img.dataset.origSrc = img.src;
        img._showingAlt = false;
        const p = new Image();
        p.src = img.dataset.altSrc;
        // 確実に CSS の transition が効くように明示
        img.style.transition = `opacity ${fadeMs}ms ease`;
        img.style.opacity = '1';
    });

    // 切替関数（1画像）
    function swapOne(img) {
        img.style.opacity = '0';
        setTimeout(() => {
            img.src = img._showingAlt ? img.dataset.origSrc : img.dataset.altSrc;
            img._showingAlt = !img._showingAlt;
            img.style.opacity = '1';
        }, fadeMs);
    }

    // 全画像を定期切替
    setInterval(() => {
        imgs.forEach(swapOne);
    }, intervalMs);
});