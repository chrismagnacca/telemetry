Template.messages.messages = function() {
  return Messages.find({}, {sort: [["id", "asc"]]});
};
