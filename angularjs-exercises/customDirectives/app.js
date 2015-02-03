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
  $scope.buildTitleParent = function(person) {
    return person.name + ' is a ' + person.type + ' at coding campus.';
  };
})
.directive('personDirective', function() {
  var linkFunc = function(scope) {
    scope.buildTitleChild = function(person) {
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
    template : '<div class="person"><h1>{{ person.name }}</h1><h2>{{ buildTitleChild(person) }}</h2></div>'
  };
});