var HomeController = RouteController.extend({
  template: "home",
  data: {
    messages: function() {
      return Messages.find({}, {sort: {order: 1}});
    }
  }
});

Router.map(function() {
  this.route("home", {
    path: "/",
    controller: HomeController
  })
});
