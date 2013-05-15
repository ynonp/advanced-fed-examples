(function($, Handlebars) {

  var template = Handlebars.compile(
    '{{#each pages}}<li><a href="#{{this}}">{{this}}</a></li>{{/each}}'
  );

  $.fn.navrender = function( options ) {
    options = $.extend({}, $.fn.navrender.defaults, options );
    var url = options.url;
    var $el = this;

    $el.addClass('nav');

    $.get(url, function(data) {
      console.dir( data );
      $el.html( template( data ) );
    });
  };

  $.fn.navrender.defaults = {
    url: '/data.json'
  };

}(jQuery, Handlebars));