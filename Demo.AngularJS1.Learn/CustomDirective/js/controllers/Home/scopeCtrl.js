(function (undefined) {

	angular.module("exampleApp", [])
		.directive("scopeDemo", function() {
			return {
				template: function() {
					return angular.element(document.querySelector("#scopeTemplate")).html();
				},
				scope: {
					local: "=nameprop",
					cityFn: "&city"
				}
			}
		})
		.controller("scopeCtrl", function ($scope) {
			$scope.data = {
				name: "Adam",
				defaultCity: "London"
			};
			
			$scope.getCity = function(name) {
				return name === "Adam" ? $scope.data.defaultCity : "Unknown";
			}
		});

})();