(function() {
    angular.module('services', [])
        .factory('ItemService', ItemService);

    ItemService.$inject = [];

    function ItemService() {
        var itemService = {};

        // Methods
        itemService.getItems = getItems;

        function getItems() {
        
            return [
                {
                    "id": 1,
                    "name": "Flex Lite Chair",
                    "src": "assets/item1.jpg",
                    "time": "12h 50m"
                },
                {
                    "id": 2,
                    "name": "REI 401 Daypack",
                    "src": "assets/item1.jpg",
                    "time": "1h 15m"
                },
                {
                    "id": 3,
                    "name": "Delta 14 Kayak with Rudder",
                    "src": "assets/item1.jpg",
                    "time": "2d 20h"
                },
                {
                    "id": 4,
                    "name": "The North Face Artic Down Parka",
                    "src": "assets/item1.jpg",
                    "time": "1d 13h"
                },
                {
                    "id": 5,
                    "name": "Running Shoes",
                    "src": "assets/item1.jpg",
                    "time": "1d 5h"
                }, 
                {
                    "id": 6,
                    "name": "Bicycle",
                    "src": "assets/item1.jpg",
                    "time": "5h 10m"
                }
            ];

        }

        itemService.woohoo = function() {
            console.log('woohoo');
        }

        return itemService;
    }
})();
