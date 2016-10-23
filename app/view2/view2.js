'use strict';

angular.module('myApp.view2', ['ngRoute', 'services', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:itemId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vm'
  });
}])

.controller('View2Ctrl', ['$routeParams', 'ItemService', '$uibModal', function($routeParams, ItemService, $uibModal) {
    var vm = this;

    // Methods
    vm.bid = bid;
    vm.init = init;
    vm.getItem = getItem;
    vm.guess = guess;

    // Properties
    vm.itemId;
    vm.item = {};
    vm.itemService = ItemService;

    // Init
    vm.init();
    
    // Method Definitions
    function bid() {
        console.log('bid!');
        vm.bidModal = $uibModal.open({
            templateUrl: 'view2/bidModal.html',
            controller: 'View2Ctrl'
        })
    }

    function guess() {
        console.log('guess');
        vm.guessModal = $uibModal.open({
            templateUrl: 'view2/guessModal.html',
            controller: 'View2Ctrl'
        })
    }

    function init() {
        vm.itemId = $routeParams.itemId;
        vm.item = vm.getItem(vm.itemId);
    }

    function getItem(itemId) {
        return vm.itemService.getItem(itemId);
    }
}]);
