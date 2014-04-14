define(function (require) {
  var router = require('plugins/router');

  return {
    router: router,
    activate: function () {
      router.map([
        { route: '', title:'Home', moduleId: 'vm/home', nav: true },
        { route: 'clicks', title:'Clicks', moduleId: 'vm/clickcounter', nav: true },
        { route: 'tasks', title:'Tasks', moduleId: 'vm/tasks', nav: true },
        { route: 'tags', title:'Tags', moduleId: 'vm/tags', nav: true },
      ]).buildNavigationModel();

      return router.activate();
    }
  };
});
