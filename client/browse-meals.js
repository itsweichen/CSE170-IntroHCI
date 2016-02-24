Template.browseMeals.events({
    'click #swipeRight': function(){
        var id = Events.findOne()._id;
        FlowRouter.go("/event/" + id)
    }
});