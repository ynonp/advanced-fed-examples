requirejs.config({
  paths: {
    'text': '../lib/require/text',
    'durandal':'../lib/durandal/js',
    'plugins' : '../lib/durandal/js/plugins',
    'transitions' : '../lib/durandal/js/transitions',
    'knockout': '../lib/knockout/knockout-2.3.0',
    'jquery': '../lib/jquery/jquery-1.9.1',
    'vm': 'view_models'
  }
});

define(function (require) {
  var system = require('durandal/system'),
    app = require('durandal/app'),
    locator = require('durandal/viewLocator'),
    plugins = require('config/plugins');

  locator.convertModuleIdToViewId = function(moduleId){
    return moduleId.replace(/^vm\//, 'views/');
  };

  system.debug(true);

  app.title = 'Durandal Starter Kit';

  app.configurePlugins(plugins);

  app.start().then(function() {
    app.setRoot('vm/shell');
  });

  window.app = app;
});
