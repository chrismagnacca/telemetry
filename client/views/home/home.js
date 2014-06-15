Template.home.events({
  "click #room-to-add": function(e) {
    e.preventDefault();
  }
});

Template.home.helpers({
  noRoomsCreated: function() {
    return (Rooms.find({}).count() == 0);
  }
});
