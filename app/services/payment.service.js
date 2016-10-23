(function() {
    angular.module('services')
        .factory('PaymentService', PaymentService)


    PaymentService.$inject = ['$http'];

    function PaymentService($http) {
        var paymentService = {};

        // Methods
        paymentService.buyItem = buyItem;
        paymentService.payUser = payUser;

        function payUser(amount) {
            $http({
                method: 'GET',
                url: 'http://pir2020.azurewebsites.net/transfer/' + amount,
                //data: amount,
                //headers: {'Content-Type' : 'application/json'}
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(JSON.stringify(response));

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(JSON.stringify(response));
            });
        }
        function buyItem(amount) {
            $http({
                method: 'POST',
                url: 'http://pir2020.azurewebsites.net/buyitem/' + amount,
                //data: amount,
                //headers: {'Content-Type' : 'application/json'}
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(JSON.stringify(response));

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log(JSON.stringify(response));
            });
        }

        return paymentService;
    }
})();
