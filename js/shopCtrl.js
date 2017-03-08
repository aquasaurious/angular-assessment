angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

    $scope.ashow = true;  // for displaying/hiding product image on click


    var getProducts = function() {
        var promise = shopService.getProducts;
        console.log('promise' + promise);
        promise.then(function(response){
            $scope.products = response.data;
            console.log($scope.products);
        });
    };
    console.log("prods: " + getProducts());
});