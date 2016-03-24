(function (undefined) {

	angular.module("exampleApp", [])
		.directive("scopeDemo", function() {
			return {
				template: "<div class='panel-body'>Name: <input ng-model=name /></div>",
				scope: true
			}
		})
		.controller("scopeCtrl", function ($scope) {
			// do nothing - no behaviors required
		});

})();