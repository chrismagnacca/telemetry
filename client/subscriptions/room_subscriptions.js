Meteor.subscribe("rooms", function() {
	Messages.distinct("room").observe({
		changed: function(id, fields) {
		},
		added: function(id) {
		},
		removed: function(id) {
		}
	});
});
