(function () {
    'use strict';

    angular
        .module('ifirmaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('pulpit-pracownikow', {
            parent: 'app',
            url: '/pulpit-pracownikow',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/layouts/navbar-left/pracownicy/pulpit-pracownikow/pulpit-pracownikow.html',
                    controller: 'PulpitPracownicyController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
