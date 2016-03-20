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
        Meteor.call('Events.methods.cancel', {id: eventId});
	}
});