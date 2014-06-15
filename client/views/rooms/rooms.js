Template.rooms.events({
  "submit form#new-message": function(e) {
    e.preventDefault();

    var username = Meteor.user().username;
    var currentRoom = Session.get("currentRoom").toString();
    var inputMessage = $("input#message-to-add").val();

    Messages.insert({ username: username, message: inputMessage, room: currentRoom });

    if(Rooms.find({number: currentRoom}).count() == 0)
      Rooms.insert({number: currentRoom});

    Meteor.call("ScrollTop");
    $("input#message-to-add").val("");
  }
});
