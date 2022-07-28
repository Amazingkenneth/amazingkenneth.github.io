(function (c, l, a, r, i, t, y) {
  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
  t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "bb27tb3p62");

let media = window.matchMedia('(prefers-color-scheme: dark)');
let callback = (e) => {
  let prefersDarkMode = e.matches;
  if (prefersDarkMode) {
    jtd.setTheme('dark');
  } else {
    jtd.setTheme('light');
  }
};
if (typeof media.addEventListener === 'function') {
  media.addEventListener('change', callback);
} else if (typeof media.addListener === 'function') {
  media.addListener(callback);
}

var Title = document.title.substring(0, document.title.match(/ \|/).index);
var pageid = location.href;
pageid = pageid.substring(pageid.substring(0, pageid.lastIndexOf('/')).lastIndexOf('/'));
if (pageid == null) {
  pageid = location.pathname.substring(0, 49);
}
pageid = decodeURI(pageid);
var cnissue = "欢迎来到此页面留言、评论、提出问题，这里的评论与网页底部上的 Gitalk 评论区中的留言互相可见。";
var enissue = "Comments and questions are welcome on this page. Comments here can be seen in the Gitalk section at the bottom of the corresponding page (URI)."
var issuebody = "URL: " + location.href + '\n' + cnissue + '\n' + enissue;
var gitalk = new Gitalk({
  clientID: '24c5d5ae0387e551cf41',
  clientSecret: 'f2999b8c00c3c20d5c6213aa34d22fcad5c3edd4',
  repo: 'amazingkenneth.github.io',
  owner: 'Amazingkenneth',
  admin: ['Amazingkenneth'],
  id: pageid,
  title: Title,
  body: issuebody,
  perPage: 5,
  createIssueManually: true,
  enableHotKey: true,
  distractionFreeMode: true
})
gitalk.render('gitalk-container');    // 渲染Gitalk评论组件