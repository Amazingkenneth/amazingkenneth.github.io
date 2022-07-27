var gitalk = new Gitalk({
  clientID: '24c5d5ae0387e551cf41',
  clientSecret: 'f2999b8c00c3c20d5c6213aa34d22fcad5c3edd4',
  repo: 'amazingkenneth.github.io',
  owner: 'Amazingkenneth',
  admin: ['Amazingkenneth'],
  distractionFreeMode: false,
  id: location.pathname     // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
})
gitalk.render('gitalk-container');    // 渲染Gitalk评论组件