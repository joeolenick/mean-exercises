angular.module('pokeApp', [])

.controller('myCtrl', function($scope, $http) {
   // Base url for the Pokemon API
   $scope.BASE_URL = 'http://pokeapi.co/';

   // TO DO: get from the pokemon API
   $scope.pokemonList = undefined;


   // Simple GET request example :
   $http.get('http://pokeapi.co/api/v1/pokedex/1/').

   success(function(data, status, headers, config) {
      $scope.pokemonList = data.pokemon;

   }).
   error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
   });


});
