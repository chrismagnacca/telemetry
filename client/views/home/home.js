Template.home.events({
  "click #room-to-add": function(e) {
    e.preventDefault();
    //TODO: refactor modals for login/register into single modal
    //      and include create room.
  }
});

Template.home.helpers({
  noRoomsCreated: function() {
    return (Rooms.find({}).count() == 0);
  }
});
