﻿(function ($, undefined) {

	angular.module("exampleApp", [])
		.directive("unorderedList", function() {
			return function(scope, element, attr) {
				// implementation code goes here
			};
		})
		.controller("defaultCtrl", function ($scope) {
			$scope.products = [
				{ name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
				{ name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
				{ name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
			];
		});

})(jQuery);