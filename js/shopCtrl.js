angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

    $scope.test = "ohai";
    $scope.ashow = true;  // for displaying our products

    var getProducts = function() {
        var promise = shopService.getProducts;
        promise.then(function(response){
            $scope.products = response.data;
            //console.log($scope.products);
        });
    };
    getProducts();
});