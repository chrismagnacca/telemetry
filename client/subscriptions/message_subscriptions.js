Meteor.subscribe("messages", function () {
	Meteor.call("ScrollTop");

	Messages.find({}).observe({
		changed: function(id, fields) {
		},
		added: function(id) {
		},
		removed: function(id) {
		}
	});
});
