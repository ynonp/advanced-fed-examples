define(function (require) {
  var router = require('plugins/router');
  var routes = require('config/routes');

  return {
    router: router,
    activate: function () {
      router.map(routes).buildNavigationModel();

      return router.activate();
    }
  };
});
