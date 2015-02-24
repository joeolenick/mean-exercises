var BASE_URL = 'http://pokeapi.co/';
angular.module('demo', [])
   .service('pokemonService', function($http, $q) {
      ///////////////////////////
      //Getting a Pokedex.
      ///////////////////////////
      this.getPokedex = function() {
         var deferred = $q.defer();
         $http({
               url: BASE_URL + 'api/v1/pokedex/1/',
               method: 'GET'
            })
            .success(function(response_data) {
               return deferred.resolve(response_data.pokemon);
            })
            .error(function(err) {
               return deferred.reject(err);
            });
         return deferred.promise;
      };
      ///////////////////////////
      //Getting a single Pokemon
      ///////////////////////////
      this.getSinglePokemon = function(id) {
         var later = $q.defer();
         $http({
               url: BASE_URL + 'api/v1/pokemon/' + id,
               method: 'GET'
            })
            .success(function(response) {
               return later.resolve(response);
            })
            .error(function(err) {
               return later.reject(err);
            });
         return later.promise;
      };
   })

.controller('demoCtrl', function($scope, pokemonService) {
   //Pokedex - returns all
   pokemonService.getPokedex()
      .then(function(pokemonList) {
         return ($scope.pokemonList = pokemonList);
      }, function(err) {
         return console.error('ERROR: getPokedex():', err);
      });


   $scope.buttonClick = function() {
      console.log($scope.id);
      pokemonService.getSinglePokemon($scope.id)
         .then(success, error);
   };
   var success = function(result) {
      console.log(result);
   };
   var error = function(err) {
      console.log(err);
   };
})


.directive('pokemon', function() {
   var linkFunc = function(scope) {
      scope.getFullResourceUri = function(resource_uri) {
         return BASE_URL + resource_uri;
      };
   };
   return {
      restrict: 'E',
      replace: true,
      link: linkFunc,
      scope: {
         pokemon: '='
      },
      template: '<div><h2>{{ pokemon.name }}</h2><p><a ng-href="{{ getFullResourceUri(pokemon.resource_uri) }}">View More About {{ pokemon.name }}</a></p></div>'
   };
});
