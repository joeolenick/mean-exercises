angular.module('toDo', [])
.controller('toDoCtrl', function($scope) {
   $scope.newToDo = {};
   $scope.toDos = [
{ text: 'Create a new toDo', done: false },
{ text: 'Open the toDo App', done: false }
];

   $scope.addToDo = function() {
      $scope.toDos.push($scope.newToDo);
      $scope.newToDo = {};
   };

});
