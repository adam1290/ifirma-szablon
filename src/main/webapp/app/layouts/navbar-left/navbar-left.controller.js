(function() {
    'use strict';

    angular
        .module('ifirmaApp')
        .controller('NavbarLeftController', NavbarLeftController);

    NavbarLeftController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService'];

    function NavbarLeftController ($state, Auth, Principal, ProfileService, LoginService) {
        var vm = this;

    }
})();
