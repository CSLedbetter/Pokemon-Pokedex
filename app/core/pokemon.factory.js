(function(){
    'use strict';

    angular
        .module('app')
        .factory('PokemonFactory', PokemonFactory)

    PokemonFactory.$inject = ['$http'];

    function PokemonFactory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { 
            $http
                .get('http://pokemon.origincodeacademy.com/api/v2/pokemon')
                .then(function (response) {
                    show = true;
                    pokemon = response.data.result;
                }
        }
    }
})();