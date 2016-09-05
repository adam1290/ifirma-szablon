(function() {
    'use strict';

    angular
        .module('ifirmaApp')
        .controller('PulpitPracownicyController', PulpitPracownicyController);

    PulpitPracownicyController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function PulpitPracownicyController ($scope, Principal, LoginService, $state) {
        var vm = this;

    
    }
})();