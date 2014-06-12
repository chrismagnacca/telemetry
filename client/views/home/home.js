Template.home.events({
  "submit form#new-message": function(e) {
    e.preventDefault();
    var input = $("input#message-to-add");
    Messages.insert({ name: input.val(), votes: 0 });
    input.val("");
  }
});
