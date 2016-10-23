'use strict';

angular.module('myApp.view1', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as vm'
  });
}])

.controller('View1Ctrl', ['ItemService', '$location', function(ItemService, $location) {
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
    }

    function viewItem(item) {
        $location.url('view2/' + item.id);
    }
}]);
