Meteor.subscribe("rooms", function() {
	Rooms.find({}).observe({
		changed: function(id, fields) {
		},
		added: function(id) {
		},
		removed: function(id) {
		}
	});
});
