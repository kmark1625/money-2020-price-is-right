(function() {
    angular.module('side-nav', [])
        .controller('SideNavController', SideNavController);
  
    SideNavController.$inject = [];

    function SideNavController() {
        var vm = this;

        // Methods
        vm.init = init;

        // Properties

        // Init
        vm.init()

        // Method Definitions
        function init() {
        }
    }
})()
