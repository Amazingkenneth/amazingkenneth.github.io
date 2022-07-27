var title = location.pathname.substr(0, 50);
var gitalk = new Gitalk({
  clientID: '24c5d5ae0387e551cf41',
  clientSecret: 'f2999b8c00c3c20d5c6213aa34d22fcad5c3edd4',
  repo: 'amazingkenneth.github.io',
  owner: 'Amazingkenneth',
  admin: ['Amazingkenneth'],
  id: title,
  perPage: 10,
  createIssueManually: true,
  enableHotKey: true,
  distractionFreeMode: true
})
gitalk.render('gitalk-container');    // 渲染Gitalk评论组件