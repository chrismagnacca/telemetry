Template.home.events({
});

Template.home.helpers({
  noRoomsCreated: function() {
    return (Rooms.find({}).count() == 0);
  }
});
