'use strict';

angular.module('myApp.view1', ['ngRoute', 'services', 'top-nav'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as vm'
  });
}])

.controller('View1Ctrl', ['ItemService', '$location', 'PaymentService', function(ItemService, $location, PaymentService) {
    var vm = this;

    // methods
    vm.init = init;
    vm.viewItem = viewItem;

    // properties
    vm.itemService = ItemService;
    vm.items = [];

    // activate
    vm.init();

    // method definitions
    function init() {
        vm.items = ItemService.getItems();
        //PaymentService.buyItem(); Put this where users can pay for an item
    }

    function viewItem(item) {
        $location.url('view2/' + item.id);
    }
}]);
