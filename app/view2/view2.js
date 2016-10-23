'use strict';

angular.module('myApp.view2', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:itemId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vm'
  });
}])

.controller('View2Ctrl', ['$routeParams', 'ItemService', function($routeParams, ItemService) {
    var vm = this;

    // Methods
    vm.init = init;
    vm.getItem = getItem;

    // Properties
    vm.itemId;
    vm.item = {};
    vm.itemService = ItemService;

    // Init
    vm.init();
    
    // Method Definitions
    function init() {
        vm.itemId = $routeParams.itemId;
        vm.item = vm.getItem(vm.itemId);
    }

    function getItem(itemId) {
        return vm.itemService.getItem(itemId);
    }
}]);
