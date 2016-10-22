var myModule = angular.module('services', []);
myModule.factory('itemService', function() {
    var itemService;
    itemService.items = [
    {
        "name": "Flex Lite Chair"
    },
    {
        "name": "REI 401 Daypack"
    },
    {
        "name": "Delta 14 Kayak with Rudder"
    },
    {
        "name": "The North Face Artic Down Parka"
    },
    {
        "name": "Running Shoes"
    }, 
    {
        "name": "Bicycle"
    }];

    itemService.woohoo = function() {
        console.log('woohoo');
    }

    return itemService;
});
