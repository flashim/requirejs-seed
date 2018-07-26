define([
    'jquery', 'underscore'
], function ($, _) {

    console.log('Hello from App!');

    var initialize = function () {
        //console.log('Initialize function has been called from main.js...');
        $('#appContent').html('App Content to load here...');
    };
    return {init: initialize};
});