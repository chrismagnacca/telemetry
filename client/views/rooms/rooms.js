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

Template.roomCreate.events({
  "submit form#room-create-form": function(e) {
    e.preventDefault();
    var roomCreate = { name: $("#room-name").val(), description: $("#room-description").val() };
    Rooms.insert({name: roomCreate.name, description: roomCreate.description});
    $("#room-create").modal("hide");
  }
});

Template.rooms.helpers ({
  isCurrentRoom: function() {
    return (this.name == Session.get("currentRoom"));
  }
});
