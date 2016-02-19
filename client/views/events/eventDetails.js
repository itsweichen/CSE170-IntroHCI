Template.eventDetails.helpers({
    event: function(){
        //console.log(Events.findOne())
        return Events.findOne()
    }
});

Template.eventDetails.events({
    'click .drop-meal-button': function(){
        var id= FlowRouter.getParam("id");
        console.log(Template.currentData())

        var thisEvent  = Events.findOne({id: id})
        console.log(thisEvent)
    }
});