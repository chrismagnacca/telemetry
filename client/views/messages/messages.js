Template.messages.messages = function() {
  var room = Session.get("currentRoom");

  if(typeof(room) == "undefined")
    return Messages.find({}, {sort: [["id", "asc"]]});
  else
    return Messages.find({room: room}, {sort: [["id", "asc"]]});
};
