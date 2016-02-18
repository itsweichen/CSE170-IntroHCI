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