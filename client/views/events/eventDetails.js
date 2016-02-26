Template.eventDetails.helpers({
    event: function(){
        //console.log(Events.findOne())
        return Events.findOne()
    }
});


Template.eventDetails.events({
	"click #cancel-event": function(){
        var eventId = FlowRouter.getParam("id");
        Meteor.call('Events.methods.cancel', {id: eventId});
	},
	   'click .drop-meal-button': function(){
        var eventId= FlowRouter.getParam("id");
        console.log(eventId);
        Events.update({_id:eventId}, {$set: {status: 2}});
        // var goUrl = "/event/"+eventId;
        // console.log("goUrl:"+goUrl)
        FlowRouter.reload();
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