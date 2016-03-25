(function(undefined) {
	angular.module("customServices", [])
		//.factory("logService", function() {
		//	var messageCount = 0;

		//	return {
		//		log: function(message) {
		//			console.log("(LOG + " + messageCount++ + ") " + message);
		//		}
		//	};
		//});
		.service("logService", function() {
			return {
				messageCount: 0,
				log: function(message) {
					console.log("(LOG2 + " + (this.messageCount)++ + ") " + message);
				}
			};
		});

})();