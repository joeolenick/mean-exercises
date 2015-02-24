angular.module('routingApp', ['ngRoute'])

.config(function ($routeProvider) {
   $routeProvider
      .when('/luke', {
         controller: 'lukeController',
         templateUrl: 'luke.tpl.html'
      })
      .when('/vader', {
         controller: 'vaderController',
         templateUrl: 'vader.tpl.html'
      })
      .when('/yoda', {
         controller: 'yodaController',
         templateUrl: 'yoda.tpl.html'
      })
      .otherwise({
         redirectTo: '/luke'
      });
})

.controller('lukeController', function ($scope, forceService){
   $scope.name = 'Luke';
   $scope.forceUsage = forceService.usage;
   $scope.use = forceService.use;
})

.controller('vaderController', function ($scope, forceService){
   $scope.forceUsage = forceService.usage;
})

.controller('yodaController', function ($scope, forceService){
   $scope.forceUsage = forceService.usage;
})

.service('forceService', function(){
   this.usage = '';

   var _this = this; //trick to use service outside of normal scope.
   this.use = function (name, method){
      _this.usage += name + ' used a ' + method;
   };
});
