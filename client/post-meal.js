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

Template.postMeal.rendered = function () { 
    window.onload = function() { 

        input = document.getElementById('autocomplete'); 
        autocomplete = new google.maps.places.Autocomplete(input); 

        // When the user selects an address from the dropdown, 
        google.maps.event.addListener(autocomplete, 'place_changed', function() { 

             // Get the place details from the autocomplete object. 
             var place = autocomplete.getPlace(); 

             console.log("place: " + JSON.stringify(place) ); 
        }); 
    }; 
};