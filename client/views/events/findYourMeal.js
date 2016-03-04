Template.findYourMeal.events({
	"click #findMeal": function(e){
		var eventId= FlowRouter.getParam("id");

        var notificationId = Notifications.success('PICKED UP!');
        Meteor.setTimeout(function(){
            Events.update({_id:eventId}, {$set: {status: 4}});
            Events.update({_id:eventId}, {$set: {isUpcoming: false}});
            FlowRouter.reload();
            Notifications.remove({ _id: notificationId });
        }, 500);
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

Template.findYourMeal.helpers({
    event: function(){
        //console.log(Events.findOne())
        return Events.findOne()
    }
});