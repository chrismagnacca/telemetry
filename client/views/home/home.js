Template.home.events({
  "submit form#new-message": function(e) {
    e.preventDefault();
    var input = $("input#message-to-add");
    debugger;
    // insert username & message
    //Messages.insert({ username: Meteor.user().username, message: input.val() });
    input.val("");
  }
});
