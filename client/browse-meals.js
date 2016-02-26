Template.browseMeals.events({
    'click #swipeRight': function(){
    	// create an event and go to that event

    	Events.insert({
    		    user1: {
                    //userId:
                    //mealId:
                    image: "/images/food1.jpg",
                    hasDropped: false,
                    hasPickedUp: false,
                    askedToChat: false,
                    likedMeal: null
                },
                user2: {
                    //userId:
                    //mealId:
                    image: "/images/home.jpg",
                    hasDropped: false,
                    hasPickedUp: false,
                    askedToChat: false,
                    likedMeal: null
                },
                time: "2:00pm 02/24/2016",
                location: "32.8800649, -117.236202217",
                canceled: false,
                isUpcoming: true,
                status: 1 // 1: eventDetail; 2: drop-wait; 3: find-your-meal; 4: finish

    	}, callback_insert_event);


        // var id = Events.findOne()._id;
        // FlowRouter.go("/event/" + id)
    }
});

function callback_insert_event(error, result){
	console.log("callback");
	console.log(result);

	// TODO: need to check if there is an error, later
	FlowRouter.go("/event/" + result);
}