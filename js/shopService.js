angular.module('assessment').service('shopService', function($http) {
    var baseURL = 'http://practiceapi.devmounta.in/products';

    this.getProducts = $http.get(baseURL);
    this.getProductbyId = function(id) {
        return $http.get(baseURL + '/' + id);
    };
});