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

var gitalk = new Gitalk({
  clientID: '24c5d5ae0387e551cf41',
  clientSecret: 'f2999b8c00c3c20d5c6213aa34d22fcad5c3edd4',
  repo: 'amazingkenneth.github.io',
  owner: 'Amazingkenneth',
  admin: ['Amazingkenneth'],
  id: pageid,
  title: Title,
  perPage: 10,
  createIssueManually: true,
  enableHotKey: true,
  distractionFreeMode: true
})
gitalk.render('gitalk-container');    // 渲染Gitalk评论组件