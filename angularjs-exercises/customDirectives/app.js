angular.module('demo', [])
.controller('demoCtrl', function($scope) {
  $scope.people = [
    { name: 'Chase',   type: 'student' },
    { name: 'Joe',     type: 'student' },
    { name: 'Jon',     type: 'student' },
    { name: 'Sariah',  type: 'student' },
    { name: 'Melissa', type: 'student' },
    { name: 'Kevin',   type: 'student' },
    { name: 'Sina',    type: 'student' },
    { name: 'Robert',  type: 'teacher' },
    { name: 'Derek',   type: 'teacher' },
    { name: 'Josh',    type: 'teacher' },
  ];
})
.directive('person', function() {
  var linkFunc = function(scope) {
    scope.buildTitle = function(person) {
      return person.name + ' is a ' + person.type + ' at coding campus.';
    };
  };
  return {
    restrict : 'E',
    replace  : true,
    link     : linkFunc,
    scope    : {
      person : '='
    },
    template : '<div class="person"><ul><li>{{ person.name }}</li><li>{{ person.type }}</li><li>{{ buildTitle(person) }}</li></ul></div>'
  };
});