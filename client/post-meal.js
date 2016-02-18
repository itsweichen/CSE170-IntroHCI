Template.postMeal.events({
    "submit #post-meal-form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        console.log("fired")

        // Get value from form element
        var name = event.target.mealName.value;

        // Insert a task into the collection
        Meals.insert({
            name: name
        });

        // Clear form
        event.target.name.value = "";
    }
});