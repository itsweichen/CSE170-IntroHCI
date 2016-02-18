Template.postMeal.events({
    "submit #post-meal-form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var name = event.target.mealName.value;
        var time = event.target.time.value;
        var loggedInUserId = Meteor.user()._id;

        // Insert a task into the collection
        Meals.insert({
            //image: image,
            name: name,
            time: time,
            //location: location,
            user: loggedInUserId
        });

        // Clear form
        event.target.mealName.value = "";
        event.target.time.value = "";
    }
});