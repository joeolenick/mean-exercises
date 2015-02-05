var BASE_URL = 'http://pokeapi.co/';
angular.module('demo', [])
.controller('demoCtrl', function($scope, $http) {
  $http({
    url: BASE_URL + 'api/v1/pokedex/1/',
    method: 'GET'
  })
  .success(function(response_data) {
    return ($scope.pokemonList = response_data.pokemon);
  })
  .error(function(err) {
    return console.error(err);
  });
})
.directive('pokemon', function() {
  var linkFunc = function(scope) {
    scope.getFullResourceUri = function(resource_uri) {
      return BASE_URL + resource_uri;
    };
  };
  return {
    restrict : 'E',
    replace  : true,
    link     : linkFunc,
    scope    : {
      pokemon: '='
    },
    template : '<div><h2>{{ pokemon.name }}</h2><p><a ng-href="{{ getFullResourceUri(pokemon.resource_uri) }}">View More About {{ pokemon.name }}</a></p></div>'
  };
});