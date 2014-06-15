var RoomsController = RouteController.extend({
	template: "rooms",
	data: {
		messages: function() {
			return Messages.find({}, {sort: {order: 1}});
		},
		rooms: function() {
			return Rooms.find({}, {sort: {order: 1}});
		},
		currentRoom: function() {
			return Session.get("currentRoom");
		}
	},
	action: function() {
		Session.set("currentRoom", this.params._id);
		this.render();
	}
});

Router.map(function(){
	this.route("room", {
		path: "/room/:_id",
		layoutTemplate: "layout",
		controller: RoomsController
	})
});
