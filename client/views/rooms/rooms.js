Template.rooms.rooms = function() {
	var rooms;
	Messages.distinct("room", function(error, result) {
		rooms = result;
	});

	return rooms;
}
