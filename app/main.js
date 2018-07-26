require.config({
  paths: {
    'jquery': 'http://code.jquery.com/jquery-latest',
    'underscore': 'libs/underscore/underscore',
    'app': 'app'
  },

  shim: {
    'underscore': {
      exports: '_'
    }
  }

});
require([
  'jquery', 'underscore', 'app'
], function ($, _, App) {

  $('#loaderStatus').html('We have now loaded jQuery...');

  $().ready(function () {
    console.log(_.isEmpty({name: 'Joe'}));
    console.log(_.isEmpty({}));
    App.init();
  });

});