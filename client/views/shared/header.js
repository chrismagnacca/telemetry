Template.header.events({
	"click a#logout" : function(e,t){
		e.preventDefault();
		Meteor.logout();
	}
});
