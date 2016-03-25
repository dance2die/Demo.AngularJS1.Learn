(function (undefined) {
	angular.module("exampleApp", ["customDirectives"])
		.controller("defaultCtrl", ["$scope", function ($scope) {
			$scope.data = {
				cities: ["London", "New York", "Paris"],
				totalClicks: 0
			};

			$scope.$watch("data.totalClicks", function (newVal) {
				console.log("Total Click Count: " + newVal);
			});
		}]);
})();