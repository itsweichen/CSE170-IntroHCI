Template.editMeal.helpers({
    imgUrl: function () {
        var id = FlowRouter.getParam("id");
        return Meals.findOne({_id: id})["image"];
    },
    name: function () {
        var id = FlowRouter.getParam("id");
        return Meals.findOne({_id: id})["name"];
    },
    time: function () {
        var id = FlowRouter.getParam("id");
        return Meals.findOne({_id: id})["time"];
    },
    location: function () {
        var id = FlowRouter.getParam("id");
        return Meals.findOne({_id: id})["location"];
    }
});

Template.editMeal.events({
    "submit #edit-meal-form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var name = event.target.mealName.value;
        var time = event.target.time.value;
        var location = event.target.address.value;

        var id = FlowRouter.getParam("id");
        Meals.update({_id: id}, {$set: {name: name, time: time, location: location}});

        var notificationId = Notifications.success('MEAL UPDATED!');
        Meteor.setTimeout(function () {
            FlowRouter.go("/my-meals");
            Notifications.remove({_id: notificationId});
        }, 500);
    },
    "click #delete-meal": function (event) {
        event.preventDefault();
        var id = FlowRouter.getParam("id");

        var notificationId = Notifications.success('MEAL DELETED!');
        Meteor.setTimeout(function () {
            FlowRouter.go("/my-meals");
            Meals.remove({_id: id});
            Notifications.remove({_id: notificationId});
        }, 500);

    }
});