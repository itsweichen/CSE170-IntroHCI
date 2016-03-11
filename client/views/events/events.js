Template.events.helpers({
    events: function () {
        var eventLists = Events.find();
        return eventLists;
    },
});

Template.event.helpers({
    reminderText: function () {
        if (this.status == 1) {
            return "Drop your meal at";
        }
        else if (this.status == 2) {
            return "You've already dropped! Waiting other to drop...";
        }
        else if (this.status == 3) {
            return "Find their drop at";
        }
        else if (this.status == 4) {
            return "Give feedback or Request chat!";
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
    },
    statusIs: function (status) {
        return this.status.toString() === status;
    }
});

