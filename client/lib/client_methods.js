Meteor.methods({
	ScrollTop: function() {
		$('#msg-container').scrollTop($('#msg-container').prop("scrollHeight"));
	}
});
