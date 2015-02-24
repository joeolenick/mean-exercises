angular.module('shoppingCartApp', ['ngRoute'])

.config(function ($routeProvider) {
	$routeProvider
		.when('/cartView', {
			controller: 'cartViewController',
			templateUrl: 'cartView.tpl.html'
		})
		.when('/orderComplete', {
			controller: 'orderCompleteController',
			templateUrl: 'orderComplete.tpl.html'
		})
		.when('/payment', {
			controller: 'paymentController',
			templateUrl: 'payment.tpl.html'
		})
		.when('/reviewOrder', {
			controller: 'reviewOrderController',
			templateUrl: 'reviewOrder.tpl.html'
		})
		.otherwise({
			redirectTo: '/cartView'
		});

})

.controller('cartViewController', function (){

})

.controller('orderCompleteController', function (){
	
})

.controller('paymentController', function (){
	
})

.controller('reviewOrderController', function (){
	
})



.service("dataService", function($http, $q){
	var BASE_URL = "http://stacked.us:7890/";

	this.getCartContents = function(){
		var deffered = $q.defer();

		$http.get(BASE_URL + 'product_list')
			.success(function(data){
				deffered.resolve(data);
			})
			.error(function(error){
				deferred.reject(error);
			});
		return deffered.promise;
	}
})

.controller('shoppingCartItems', function($scope, dataService){
	$scope.cartContents = undefined;

	$scope.getCartContent = function() {

		dataService.getCartContents().then(function(data){
			$scope.cartContents = data;
		})
	}

})