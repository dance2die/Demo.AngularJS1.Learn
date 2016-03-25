(function(undefined) {
	angular.module("exampleApp", [])
		.controller("defaultCtrl", ["$scope", function($scope) {
			$scope.data = {
				cities: ["London", "New York", "Paris"],
				totalClicks: 0
			};

			$scope.$watch("data.totalClicks", function(newVal) {
				console.log("Total Click Count: " + newVal);
			});
		}])
		.directive("triButton", function() {
			return {
				scope: {
					counter: "=counter"
				},
				link: function(scope, element, attrs) {
					element.on("click", function(event) {
						console.log("Button click: " + event.target.innerText);
						scope.$apply(function() {
							scope.counter++;
						});
					});
				}
			};
		});
})();