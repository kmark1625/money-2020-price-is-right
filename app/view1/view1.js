'use strict';

angular.module('myApp.view1', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function(itemService) {
    var vm = this;

    // methods
    vm.init = init;

    // properties
    vm.itemService = itemService;
    vm.items = [];

    // activate
    vm.init();

    // method definitions
    function init() {
        console.log('items:');
        console.log(vm.items);
    }
}]);
