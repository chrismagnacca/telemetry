Template.home.events({
  "submit form#new-message": function(e) {
    e.preventDefault();
    var input = $("input#message-to-add");
    Messages.insert({ username: Meteor.user().username, message: input.val(), room: Session.get("currentRoom") });
    Meteor.call("ScrollTop");
    input.val("");
  }
});
