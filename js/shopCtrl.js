angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

//    $scope.test = "ohai";
//    $scope.srvtst = shopService.test;
    $scope.ashow = true;  // for displaying our products

    
    var getProducts = function() {
        var promise = shopService.getProducts;
 //       console.log('promise' + promise);
        promise.then(function(response){
            $scope.products = response.data;
 //           console.log($scope.products);
        });
    };
 getProducts();
});