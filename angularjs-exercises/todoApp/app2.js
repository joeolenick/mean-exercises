angular.module('toDo', [])
.directive('onEnter', function() {
  var linkFunc = function(scope, elem, attrs) {
    elem.bind("keypress", function(event) {
      if(event.which !== 13) return;
      scope.$apply(attrs.onEnter);
    });
  };
  return {
    restrict: 'A',
    link: linkFunc
  };
})
.controller('toDoCtrl', function($scope) {
  $scope.newToDo = {};
  $scope.toDos = [
    { text: 'Create a new toDo', done: false },
    { text: 'Open the toDo App', done: true }
  ];
  $scope.addToDo = function() {
    $scope.toDos.push($scope.newToDo);
    $scope.newToDo = {};
  };
});