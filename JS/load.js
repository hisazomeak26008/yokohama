//HEAD
const HEAD_HTML = `
<meta charset="UTF-8">
<title>魅力ある横浜</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="apple-touch-icon" sizes="180x180" href="/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/image/favicon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/image/favicon.png">
<link rel="icon" type="image/png" sizes="16x16" href="/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/image/favicon.png">
<link rel="icon" href="/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/img/favicon.svg" sizes="any" type="image/svg+xml">
<meta name="description" content="ページの説明文">
<meta name="keywords" content="横浜,観光,旅行,グルメ,歴史">
<meta name="author" content="久染仁">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<link href="/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/css/style.css" type="text/css" rel="stylesheet">
`;

//HEADER
const HEADER_HTML = `
魅力ある横濱
`;

//menu
const MENU_HTML = `
<li onclick="link('/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/content/data.html')">データ</li>
<li onclick="link('/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/content/area.html')">エリア</li>
<li onclick="link('/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/content/product.html')">名産</li>
<li onclick="link('/Users/hitoshihisazome/Documents/Kaien/個人ワーク/ホームページ/yokohama/yokohama/content/history.html')">歴史</li>
`;

const TOPBUTTON_HTML = `
▲上へ戻る
`;

//FOOTER
const FOOTER_HTML = `
<small>&copy; 2026 久染仁</small>
`;

//読込
function load() {
	const headTag=document.querySelector("head");
	if (headTag) headTag.innerHTML=HEAD_HTML;

	const headerTag=document.querySelector("header");
	if (headerTag) headerTag.innerHTML=HEADER_HTML;

	const menuTag=document.querySelector("menu");
	if (menuTag) menuTag.innerHTML=MENU_HTML;
	
	const topButtonTag=document.querySelector("#topbutton");
	if (topButtonTag) topButtonTag.innerHTML=TOPBUTTON_HTML;

	const footerTag=document.querySelector("footer");
	if (footerTag) footerTag.innerHTML=FOOTER_HTML;
};