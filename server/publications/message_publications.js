Meteor.publish("messages", function () {
  return Messages.find({}, {sort: [["votes", "desc"], ["name", "asc"]]});
});
