(function() {
    angular.module('services', [])
        .factory('ItemService', ItemService);

    ItemService.$inject = [];

    function ItemService() {
        var itemService = {};

        // Methods
        itemService.getItems = getItems;
        itemService.getItem = getItem;
        itemService.toggleChecked = toggleChecked;

        // Properties
        itemService.checked = false;

        function getItems() {
        
            return [
                {
                    "id": 1,
                    "name": "Flex Lite Chair",
                    "src": "assets/item1.jpg",
                    "time": "12h 50m",
                    "rating": 3
                },
                {
                    "id": 2,
                    "name": "REI 401 Daypack",
                    "src": "assets/item2.jpg",
                    "time": "1h 15m",
                    "rating": 4
                },
                {
                    "id": 3,
                    "name": "Delta 14 Kayak with Rudder",
                    "src": "assets/item1.jpg",
                    "time": "2d 20h",
                    "rating": 5
                },
                {
                    "id": 4,
                    "name": "The North Face Artic Down Parka",
                    "src": "assets/item2.jpg",
                    "time": "1d 13h",
                    "rating": 4
                },
                {
                    "id": 5,
                    "name": "Running Shoes",
                    "src": "assets/item1.jpg",
                    "time": "1d 5h",
                    "rating": 3
                }, 
                {
                    "id": 6,
                    "name": "Bicycle",
                    "src": "assets/item2.jpg",
                    "time": "5h 10m",
                    "rating": 5
                }
            ];

        }

        function getItem(id) {
            return itemService.getItems()[id-1];
        }

        function toggleChecked() {
            itemService.checked = itemService.checked? false : true;
        }

        return itemService;
    }
})();
