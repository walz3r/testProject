var testApp = angular.module("testApp", ['ngRoute']);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/departments/', {
        templateUrl: '../views/departments.html',
        controller: 'departmentsCtrl'
      })
      .when('/employees/:page/', {
        templateUrl: '../views/index.html',
        controller: 'mainCtrl'
      })
      // .when('/employees/', {
      //   templateUrl: '../views/index.html',
      //   controller: 'mainCtrl'
      // })
      .otherwise({
         redirectTo: '/employees/1'
      });
     
  }]);

