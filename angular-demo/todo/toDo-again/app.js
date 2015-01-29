angular.module('todo', [])
.controller('toDoCtrl', function($scope) {
   $scope.newToDo;
   $scope.toDos = [];
   $scope.addToDo = function() {
      $scope.toDos.push({
         title:$scope.newToDo,
         done:false});
      $scope.newToDo = '';
   };
});
