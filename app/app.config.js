'use strict';

angular.
  module('ddcApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/',{
          resolve:{
            "check": function($location,$cookies){
              if($cookies.get('loggedIn')){
                $location.path('/launchyears');
              }
            }
          },
          template: '<default></default>'
        }).
        when('/launchyears',{
          resolve:{
            "check": function($location,$cookies){
              if(!$cookies.get('loggedIn')){
                $location.path('/');
              }
            }
          },
          template: '<launch-years></launch-years>'
        }).
        when('/launchquarter/:yearId',{
          resolve:{
            "check": function($location,$cookies){
              if(!$cookies.get('loggedIn')){
                $location.path('/');
              }
            }
          },
          template: '<launch-quarter></launch-quarter>'
        }).
        when('/launchlist/:yearId/:quarterId',{
          resolve:{
            "check": function($location,$cookies){
              if(!$cookies.get('loggedIn')){
                $location.path('/');
              }
            }
          },
          template: '<launch-list></launch-list>'
        }).
        when('/launchproduct', {
          resolve:{
            "check": function($location,$cookies){
              if(!$cookies.get('loggedIn')){
                $location.path('/');
              }
            }
          },
          template: '<launch-detail></launch-detail>'
        }).
        when('/products',{
          resolve:{
            "check": function($location,$cookies){
              if(!$cookies.get('loggedIn')){
                $location.path('/');
              }
            }
          },
          template: '<product-list></product-list>'
        }).
        when('/fileupload',{
          resolve:{
            "check": function($location,$cookies){
              if(!$cookies.get('loggedIn')){
                $location.path('/');
              }
            }
          },
          template: '<fileupload></fileupload>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        otherwise('/');
    }
  ]);