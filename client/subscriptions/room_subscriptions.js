Meteor.subscribe("rooms", function() {
	Messages.find({}).observe({
		changed: function(id, fields) {
		},
		added: function(id) {
		},
		removed: function(id) {
		}
	});
});
