Template.message_list.helpers({
    messages: function () {
    var pid = FlowRouter.getParam("partner");

    return Messages.find({
      $and: [
        { partner: pid },
        { owner: Meteor.userId() }
      ]
    });
    }
});


Template.chat.helpers({
    partnerId: function () {
		var pid = FlowRouter.getParam("partner");
        return pid;
    }
});

Template.submit_text.events({
    "submit form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var msg = event.target.message.value;
     	var pid = FlowRouter.getParam("partner");
	
        // Insert a task into the collection
        Messages.insert({
            text: msg,
            createdAt: new Date(),            // current time
            owner: Meteor.userId(),           // _id of logged in user
            username: Meteor.user().username,  // username of logged in user
			partner: pid
        });


        // Clear form
        event.target.message.value = "";
    }
});
