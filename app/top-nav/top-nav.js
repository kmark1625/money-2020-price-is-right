(function() {
    angular.module('top-nav', ['ui.bootstrap', 'side-nav'])
        .controller('TopNavController', TopNavController);
  
    TopNavController.$inject = ['$location'];

    function TopNavController($location) {
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
        }

        function openGraph() {
            $location.url('view3');
        }
    }
})()
