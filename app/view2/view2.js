'use strict';

angular.module('myApp.view2', ['ngRoute', 'services', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:itemId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vm'
  });
}])

.controller('View2Ctrl', ['$routeParams', 'ItemService', '$uibModal', 'PaymentService', function($routeParams, ItemService, $uibModal, PaymentService) {
    var vm = this;

    // Methods
    vm.bid = bid;
    vm.init = init;
    vm.getItem = getItem;
    vm.guess = guess;
    vm.buyItem = buyItem;

    // Properties
    vm.itemId;
    vm.item = {};
    vm.itemService = ItemService;
    vm.paymentService = PaymentService;

    // Init
    vm.init();
    
    // Method Definitions
    function bid() {
        vm.bidModal = $uibModal.open({
            templateUrl: 'view2/bidModal.html',
            controller: 'View2Ctrl'
        })
    }

    function guess() {
        vm.guessModal = $uibModal.open({
            templateUrl: 'view2/guessModal.html',
            controller: 'View2Ctrl as vm'
        })
    }

    function init() {
        vm.itemId = $routeParams.itemId;
        vm.item = vm.getItem(vm.itemId);
    }

    function getItem(itemId) {
        return vm.itemService.getItem(itemId);
    }

    function buyItem(price) {
        vm.paymentService.buyItem;
    }
}]);
