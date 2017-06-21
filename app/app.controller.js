(function(){
    'use strict';

    angular
        .module('app')
        .controller('PokemonController', PokemonController)

    PokemonController.$inject = ['PokemonFactory'];

    function PokemonController(PokemonFactory) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();