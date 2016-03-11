Template.chat.onRendered(function () {
    var $footer = $('#bottomNav');
    var $aboveFooter = $('#aboveFooter');
    $aboveFooter.css("position", "fixed");
    $aboveFooter.css('top', ($(window).height() - $footer.height() - $aboveFooter.height() - 10) + 'px');
    console.log("footer");
    console.log(( $(window).height() + $aboveFooter.height()) + 'px');
});


Template.message_list.helpers({
    messages: function () {
        var pid = FlowRouter.getParam("partner");

        return Messages.find({
            $and: [
                {partner: pid},
                {owner: Meteor.userId()}
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

        var theDate = new Date();

        // Insert a task into the collection
        Messages.insert({
            text: msg,
            createdAt: moment(theDate).calendar(),            // current time
            owner: Meteor.userId(),           // _id of logged in user
            username: Meteor.user().profile.name,  // username of logged in user
            partner: pid
        });


        // Clear form
        event.target.message.value = "";
    }
});
