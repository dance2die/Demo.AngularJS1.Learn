(function (undefined) {

	angular.module("exampleApp", [])
		.directive("scopeDemo", function() {
			return {
				template: function() {
					return angular.element(document.querySelector("#scopeTemplate")).html();
				},
				scope: {
					local: "=nameprop"
				}
			}
		})
		.controller("scopeCtrl", function ($scope) {
			$scope.data = { name: "Adam" };
			$scope.city = "London";
		});

})();