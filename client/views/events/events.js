Template.events.helpers({
	events: function () {
		var eventLists = Events.find();
		return eventLists;
	},
});

Template.event.helpers({
	reminderText: function () {
		if (this.status == 1) {
			return "[Phase 1] Be ready to drop your meal at";
		}
		else if (this.status == 2) {
			return "[Phase 2] You've already dropped! Waiting other to drop...";
		}
		else if (this.status == 3) {
			return "[Phase 3] Both dropped. Find theirs at";
		}
		else if (this.status == 4) {
			return "[Finished] Click here to give feedback or Request chat!";
		}
	},
	showTime: function () {
		if (this.status == 1)
			return true;
		else
			return false;
	},
	showLocation: function () {
		if (this.status == 3)
			return true;
		else
			return false;
	}
});