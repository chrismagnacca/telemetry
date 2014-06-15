var HomeController = RouteController.extend({
  template: "home",
  data: {
    messages: function() {
      return Messages.find({}, {sort: {order: 1}});
    },
    rooms: function() {
      return Rooms.find({}, {sort: {order: 1}});
    }
  },
  action: function() {
    Session.set("currentRoom", 0);
    this.render();
  }
});

Router.map(function() {
  this.route("home", {
    path: "/",
    controller: HomeController
  })
});
