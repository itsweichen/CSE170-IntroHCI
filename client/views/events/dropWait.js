Template.dropWait.events({
	"click #simulate-other-drop": function(e){
		e.preventDefault();

		var eventId= FlowRouter.getParam("id");
    	console.log(eventId);
    	Events.update({_id:eventId}, {$set: {status: 3}});
       	FlowRouter.reload();
	},
	"click #cancel-event": function(){
        var eventId = FlowRouter.getParam("id");
        var notificationId = Notifications.success('EVENT CANCELLED!');
        Meteor.setTimeout(function(){
            //FlowRouter.go("/my-meals");
            Meteor.call('Events.methods.cancel', {id: eventId});
            Notifications.remove({ _id: notificationId });
        }, 500);
	}
});

Template.dropWait.helpers({
    event: function(){
        //console.log(Events.findOne())
        return Events.findOne()
    }
});