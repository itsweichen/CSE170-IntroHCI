Template.eventDetails.helpers({
    event: function(){
        console.log(Events.findOne())
        return Events.findOne()
    }
});