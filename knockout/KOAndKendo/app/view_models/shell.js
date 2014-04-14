define(function (require) {
  var router = require('plugins/router');

  return {
    router: router,
    activate: function () {
      router.map([
        { route: '', title:'Home', moduleId: 'vm/home', nav: true },
        { route: 'page2', title:'Page2', moduleId: 'vm/page2', nav: true }
      ]).buildNavigationModel();

      return router.activate();
    }
  };
});
