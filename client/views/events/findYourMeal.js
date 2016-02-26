Template.findYourMeal.events({
	"click #findMeal": function(e){
		var eventId= FlowRouter.getParam("id");
    	console.log(eventId);
    	Events.update({_id:eventId}, {$set: {status: 4}});
       	FlowRouter.reload();
	},
	"click #cancel-event": function(){
        var eventId = FlowRouter.getParam("id");
        Meteor.call('Events.methods.cancel', {id: eventId});
	}
});