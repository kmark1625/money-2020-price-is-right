(function() {
    angular.module('wrapper', ['ui.bootstrap', 'side-nav', 'pageslide-directive', 'services'])
        .controller('WrapperController', WrapperController);
  
    WrapperController.$inject = ['$location', 'ItemService'];

    function WrapperController($location, ItemService) {
        var vm = this;

        // Methods
        vm.init = init;
        vm.openSideNav = openSideNav;
        vm.openGraph = openGraph;
        vm.openSideNav = openSideNav

        // Properties
        vm.itemService = ItemService;

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
