requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['jquery', 'handlebars',  'app/test'],
function   ($,        handlebars,   test) {
    //jQuery, handlebars and the app/sub module are all
    //loaded and can be used here now.



    var Handlebars = require("handlebars").Handlebars;

    Handlebars.registerHelper('list', function(items, options) {
      var out = "<ul>";

      for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
      }

      return out + "</ul>";
    });



});