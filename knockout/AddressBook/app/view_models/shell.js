define(function (require) {
  var router = require('plugins/router');

  return {
    router: router,
    activate: function () {
      router.map([
        { route: '', title:'Home', moduleId: 'vm/home', nav: true },
        { route: 'contacts/:id', title:'Contact Info', moduleId: 'vm/contact', nav: false },
      ]).buildNavigationModel();

      return router.activate();
    }
  };
});
