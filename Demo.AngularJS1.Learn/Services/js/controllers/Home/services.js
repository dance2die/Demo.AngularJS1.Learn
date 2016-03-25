(function(undefined) {
	angular.module("customServices", [])
		.factory("logService", function() {
			var messageCount = 0;

			return {
				log: function(message) {
					console.log("(LOG + " + messageCount++ + ") " + message);
				}
			};
		});
})();