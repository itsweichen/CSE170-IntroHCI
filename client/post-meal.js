Template.postMeal.events({
    "submit #post-meal-form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var name = event.target.mealName.value;
        var time = event.target.time.value;

        // Insert a task into the collection
        Meals.insert({
            //image: image,
            name: name,
            time: time,
            //location: location,
        });

        // Clear form
        event.target.mealName.value = "";
        event.target.time.value = "";
    }
});