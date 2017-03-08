angular.module('assessment').controller('productDetailCtrl', function($scope, $stateParams, shopService) {

    $scope.test = "ohai";
    
    $scope.getProduct = function(id) {
        var promise = shopService.getProductbyId(id);
        promise.then(function(response){
            $scope.product = response.data;
            console.log($scope.product);
        });
    };
    console.log($stateParams);
    $scope.getProduct($stateParams.id);
});