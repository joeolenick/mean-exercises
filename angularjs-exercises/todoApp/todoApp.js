angular.module('todo', [])
.controller('todoCtrl', function($scope) {
  $scope.newToDo;
  $scope.toDos = [];
  $scope.addTodo = function() {
    $scope.toDos.push({ 
      title:$scope.newToDo, 
      done:false 
    });
    $scope.newToDo = '';
  };
});