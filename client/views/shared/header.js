Template.header.events({
	"click a#logout" : function(e,t){
		e.preventDefault();
		Meteor.logout();
	}
});

Template.header.gravatar = function() {
	return Gravatar.imageUrl(Meteor.user().emails[0].address);
};
