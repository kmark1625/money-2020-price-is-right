(function() {
    angular.module('top-nav', ['ui.bootstrap', 'side-nav', 'pageslide-directive', 'services'])
        .controller('TopNavController', TopNavController);
  
    TopNavController.$inject = ['$location', 'ItemService'];

    function TopNavController($location, ItemService) {
        var vm = this;

        // Methods
        vm.init = init;
        vm.openSideNav = openSideNav;
        vm.openGraph = openGraph;
        vm.openSideNav = openSideNav

        // Properties

        // Init
        vm.init()

        // Method Definitions
        function init() {
        }

        function openSideNav() {
            ItemService.checked = ItemService.checked? false: true;
        }

        function openGraph() {
            $location.url('view3');
        }
    }
})()
