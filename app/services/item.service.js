(function() {
    angular.module('services', [])
        .factory('ItemService', ItemService);

    ItemService.$inject = [];

    function ItemService() {
        var itemService = {};

        // Methods
        itemService.getItems = getItems;
        itemService.getItem = getItem;

        function getItems() {
        
            return [
                {
                    "id": 1,
                    "name": "Flex Lite Chair",
                    "src": "assets/item1.jpg",
                    "description": "With a carrying case and breathable mesh, this chair may not ever leave your pack or gear bin. ",
                    "time": "12h 50m",
                    "rating": 3
                },
                {
                    "id": 2,
                    "name": "REI 401 Daypack",
                    "src": "assets/item2.jpg",
                    "description": "This sturdy, big-capacity daypack is also very big on organization and comfort.",
                    "time": "1h 15m",
                    "rating": 4
                },
                {
                    "id": 3,
                    "name": "Delta 14 Kayak with Rudder",
                    "src": "assets/item3.jpg",
                    "description": "Weighing in at a sleek 45 lbs., the Delta 14 Kayak with Rudder from Delta Kayaks delivers speed and stability and offers tons of gear storage for weekend trips and extended tours.",
                    "time": "2d 20h",
                    "rating": 5
                },
                {
                    "id": 4,
                    "name": "The North Face Artic Down Parka",
                    "src": "assets/item4.jpg",
                    "description": "HyVent® coating that delivers cold- and wet-weather protection. Insulated with 550-fill-power down to ensure warmth. Hood is removable.",
                    "time": "1d 13h",
                    "rating": 4
                },
                {
                    "id": 5,
                    "name": "New Balance 860v6",
                    "src": "assets/item5.jpg",
                    "description": "Now you can have both the stability you need from a running shoe and the style you crave for off-days or post-run.",
                    "time": "1d 5h",
                    "rating": 3
                }, 
                {
                    "id": 6,
                    "name": "2017 Windsor Wellington 2.0",
                    "src": "assets/item6.jpg",
                    "description": "A high level of engineering and attention to detail is seen on all Windsor road bikes.",
                    "time": "5h 10m",
                    "rating": 5
                }
            ];

        }

        function getItem(id) {
            return itemService.getItems()[id-1];
        }

        return itemService;
    }
})();
