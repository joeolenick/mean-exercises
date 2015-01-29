angular.module('profileApp', [])

.controller('profileController', function ($scope) {
  $scope.name = 'Yzma';
  $scope.eye_color = 'blue';
  $scope.expression = 'surprise';
  $scope.thoughts = 'Is that my voice? Is that myyyyyy voice?';
  $scope.profile_image = "http://i.ytimg.com/vi/URTTK2V2CAE/hqdefault.jpg";
});
