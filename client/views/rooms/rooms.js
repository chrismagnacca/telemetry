Template.rooms.events({
  "submit form#new-message": function(e) {
    e.preventDefault();

    var username = Meteor.user().username;
    var currentRoom = Session.get("currentRoom").toString();
    var inputMessage = $("input#message-to-add").val();

    Messages.insert({ username: username, message: inputMessage, room: currentRoom });

    Meteor.call("ScrollTop");
    $("input#message-to-add").val("");
  }
});

Template.rooms.helpers ({
  isCurrentRoom: function() {
    return (this.number == Session.get("currentRoom"));
  }
});
