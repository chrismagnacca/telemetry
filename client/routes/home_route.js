var HomeController = RouteController.extend({
  template: "home",
  data: {
    options: function() {
      return Messages.find({}, {sort: {order: 1}});
    }
  }
});

Router.map(function() {
  this.route("home", {
    path: "/",
    controller: HomeController,
  })
});
