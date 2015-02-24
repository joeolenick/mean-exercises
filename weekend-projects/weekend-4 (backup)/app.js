angular.module('shoppingCartApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/cartView', {
			controller: 'cartViewController',
			templateUrl: 'cartView.html'
		})
		.when('/orderComplete', {
			controller: 'orderCompleteController',
			templateUrl: 'orderComplete.html'
		})
		.when('/payment', {
			controller: 'paymentController',
			templateUrl: 'payment.html'
		})
		.when('/reviewOrder', {
			controller: 'reviewOrderController',
			templateUrl: 'reviewOrder.html'
		})
		.otherwise({
			redirectTo: '/cartViewController'
		});
})

.controller('cartViewController', function ($scope){

})

.controller('orderCompleteController', function ($scope){
	
})

.controller('paymentController', function ($scope){
	
})

.controller('reviewOrderController', function ($scope){
	
})
