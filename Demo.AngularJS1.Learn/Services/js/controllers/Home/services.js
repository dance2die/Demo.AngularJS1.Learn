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
		//.service("logService", function() {
		//	return {
		//		messageCount: 0,
		//		log: function(message) {
		//			console.log("(LOG2 + " + (this.messageCount)++ + ") " + message);
		//		}
		//	};
		//});
		.provider("logService", function () {
			var counter = true;
			var debug = true;

			return {
				messageCounterEnabled: function(setting) {
					if (angular.isDefined(setting)) {
						counter = setting;
						return this;
					} else {
						return counter;
					}
				},
				debugEnabled: function(setting) {
					if (angular.isDefined(setting)) {
						debug = setting;
						return this;
					} else {
						return debug;
					}
				},
				$get: function() {
					return {
						messageCount: 0,
						log: function(message) {
							if (debug) {
								console.log("(LOG3" + (counter ? " + " + this.messageCount++ + ") " : ") ") + message);
							}
						}
					};
				}
			};
		});
})();