Template.message_list.helpers({
    messages: function () {
        var filter = {};
        var sort = {
            sort: {createdAt: -1}
        };
        return Messages.find(filter, sort);
    }
});

Template.submit_text.events({
    "submit form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var msg = event.target.message.value;

        // Insert a task into the collection
        Messages.insert({
            text: msg,
            createdAt: new Date(),            // current time
            owner: Meteor.userId(),           // _id of logged in user
            username: Meteor.user().username  // username of logged in user
        });

        // Clear form
        event.target.message.value = "";
    }
});
