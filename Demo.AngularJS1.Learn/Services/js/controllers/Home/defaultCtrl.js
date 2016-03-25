(function (undefined) {
	angular.module("exampleApp", ["customDirectives", "customServices"])
		.controller("defaultCtrl", ["$scope", "logService", function ($scope, logService) {
			$scope.data = {
				cities: ["London", "New York", "Paris"],
				totalClicks: 0
			};

			$scope.$watch("data.totalClicks", function (newVal) {
				logService.log("Total click count: " + newVal);
			});
		}]);
})();