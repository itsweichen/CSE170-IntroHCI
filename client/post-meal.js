Template.postMeal.events({
    "submit #post-meal-form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var name = event.target.mealName.value;
        var time = event.target.time.value;
        var loggedInUserId = Meteor.user()._id;
		var location = event.target.address.value;
        if(event.target.imgUrl) {
            var imageUrl = event.target.imgUrl.value;
        } else {
            var imageUrl = "";
        }

        Meals.insert({
            image: imageUrl,
            name: name,
            time: time,
            location: location,
            user: loggedInUserId,
            createdAt: new Date()
        });

        var notificationId = Notifications.success('MEAL POSTED!');
        Meteor.setTimeout(function(){
            FlowRouter.go("/my-meals");
            Notifications.remove({ _id: notificationId });
        }, 500);

    },
    "click .upload-img": function (event) {
        console.log("upload btn clicked");

        var randomImgIndex = Math.floor(Math.random() * 5 + 1);

        var imgUrl = '/images/food'+randomImgIndex+'.jpg';
        var addImgHtml = "<div><img src=" + imgUrl + " height='100px'></div>";
        console.log("addImgHtml"+addImgHtml);
        var imgHiddenInput = "<input type='hidden' name='imgUrl' value="+imgUrl+">";
        $(".upload-img").after(addImgHtml+imgHiddenInput);
        $(".upload-img").remove();
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




