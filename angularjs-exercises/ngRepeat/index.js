angular.module('app', [])
.controller('test', function($scope) {
  $scope.array = [
  { name: 'Josh', age: 22},
  { name: 'Derek', age: 25},
  { name: 'Sariah', age: 52},
  { name: 'Joe', age: 62},
  { name: 'Mark', age: 29},
  { name: 'Robert', age: 24},
  ];
  $scope.myName = 'Josh Crowther';
  $scope.style = true;
  $scope.shake = true;

  $scope.show = function(person) {
    return person.age > 25;
  };
});

var object = {
  'key':{name:'value'},
  'key2':'value2'
};

for (var i in object) {
  object[i].name;
}