angular.module('demo', [])

///////////////////////////////////////
// Service
///////////////////////////////////////
.service('titleService', function() {
      this.buildTitle = function(person) {
         return person.name + ' is a ' + person.type + ' at coding campus.';
      };
   })
///////////////////////////////////////
// Controller
///////////////////////////////////////
   .controller('demoCtrl', function($scope, titleService) {
      $scope.people = [{
         name: 'Chase',
         type: 'student'
      }, {
         name: 'Joe',
         type: 'student'
      }, {
         name: 'Jon',
         type: 'student'
      }, {
         name: 'Sariah',
         type: 'student'
      }, {
         name: 'Melissa',
         type: 'student'
      }, {
         name: 'Kevin',
         type: 'student'
      }, {
         name: 'Sina',
         type: 'student'
      }, {
         name: 'Robert',
         type: 'teacher'
      }, {
         name: 'Derek',
         type: 'teacher'
      }, {
         name: 'Josh',
         type: 'teacher'
      }, ];

      $scope.title = function(person) {
         return titleService.buildTitle(person);
      };
   })

///////////////////////////////////////
// directive
///////////////////////////////////////
.directive('personDirective', function(titleService) {
   var linkFunc = function(scope) {

      scope.title = function(person) {
         return titleService.buildTitle(person);
      };
   };
   return {
      restrict: 'A',
      replace: true,
      link: linkFunc,
      scope: {
         person: '='
      },
      template: '<div class="person"><h1>{{ person.name }}</h1><h2>{{ title(person) }} </h2></div>'
   };
});
