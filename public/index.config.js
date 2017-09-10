angular.
  module('emporiumApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<home-component></home-component>'
        })
        .when("/viewDetails",{
          template : "<view-details></view-details>"
        })
        .when("/addDetails",{
          template : "<add-details></add-details>"
        })
        .otherwise("/");
    }
  ]);
