requirejs.config({

  paths : {
    'backbone' : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min',
    'underscore' : 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    'jquery' : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
    'injector' : 'https://unpkg.com/Diogenes@1.4.14/lib/injector'
  }
});

require(['bootstrap'], function (bootstrap) {
  bootstrap();
});
