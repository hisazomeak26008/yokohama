function link(url) {
    location.href=url;
    resetDataState();
}

document.querySelectorAll("header").forEach(tag => {
    tag.onclick=function () {
        link("/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/index.html");  // ← 飛ばしたいページ
    };
});

document.querySelectorAll("nav > li:first-of-type").forEach(tag => {
    tag.onclick=function () {
        link("/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/index.html");  // ← 飛ばしたいページ

    };
});

const btn = document.getElementById('topbutton');
// スクロールしたら表示・非表示を切り替え
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
// クリックでトップへ戻る
btn.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
};
