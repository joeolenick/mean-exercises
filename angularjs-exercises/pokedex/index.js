var fs = require('fs');
var q = require('q');
var req = require('superagent');
var BASE = 'http://pokeapi.co/';

req.get(BASE + 'api/v1/pokedex/1/')
.set('Accept', 'application/json')
.end(function(err, res) {
  var pokePromises = res.body.pokemon.map(function(pokemon, index) {
    if (index < 10) {
      var dfd = q.defer();

      req.get(BASE + pokemon.resource_uri)
      .end(function(err, res) {
        if (err) return dfd.reject();
        return dfd.resolve(res.body);
      });

      return dfd.promise;
    } else {
      return null;
    }
  });

  q.all(pokePromises)
  .then(function(pokemon) {
    pokemon = pokemon.filter(function(val) {
      return !!val;
    });
    console.log('Pokemon:', pokemon);
    fs.writeFileSync('data.json', JSON.stringify(pokemon));
  }, function(err) {

    console.error('Error in Calls:', err);
  })
  .catch(function(err) {
    console.error('Error Caught:',err);
  });
});
