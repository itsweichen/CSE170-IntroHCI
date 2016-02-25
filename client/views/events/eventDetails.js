Template.eventDetails.helpers({
    event: function(){
        //console.log(Events.findOne())
        return Events.findOne()
    }
});


Template.eventDetails.events({
	"click #cancel-event": function(){
		console.log("cancel this event");
		var eventId = FlowRouter.getParam("id");
		Events.remove({_id: eventId});

		FlowRouter.go("/events");
	}
});

//Template.eventDetails.events({
//    'click .drop-meal-button': function(){
//        var id= FlowRouter.getParam("id");
//        console.log(Template.currentData())
//
//        var thisEvent  = Events.findOne({id: id})
//        console.log(thisEvent)
//    }
//});