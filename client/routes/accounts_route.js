var AccountController = RouteController.extend({
	template: "accounts",
	data: {
		messages: function() {
			return Messages.find({}, {sort: {order: 1}});
		},
		rooms: function() {
			return Rooms.find({}, {sort: {order: 1}});
		}
	},
	action: function() {
		this.render();
	}
});

Router.map(function(){
	this.route("account", {
		path: "/account/:_id",
		layoutTemplate: "layout",
		controller: AccountController
	})
});
