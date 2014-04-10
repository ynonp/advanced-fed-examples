define(function (require) {
  var router = require('plugins/router');

  return {
    router: router,
    activate: function () {
      router.map([
        { route: '', title:'Home', moduleId: 'vm/home', nav: true },
        { route: 'weather', title:'Weather', moduleId: 'vm/tasks', nav: true },
      ]).buildNavigationModel();

      return router.activate();
    }
  };
});
