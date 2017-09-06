'use strict';

angular.
  module('ddcApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/',{template: '<default></default>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        otherwise('/');
    }
  ]);
