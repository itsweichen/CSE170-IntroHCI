Template.browseMeals.events({
    'click #swipeRight': function(){
    	// create an event and go to that event
        var randomImgIndex = Math.floor(Math.random() * 5) + 1;
        var img1 = '/images/food'+randomImgIndex+'.jpg';
        var randomImgIndex2 = (randomImgIndex + Math.floor(Math.random() * 5)) % 5 + 1;
        var img2 = '/images/food'+randomImgIndex2+'.jpg';
    	Events.insert({
    		    user1: {
                    //userId:
                    //mealId:
                    image: img1,
                    hasDropped: false,
                    hasPickedUp: false,
                    askedToChat: false,
                    likedMeal: null
                },
                user2: {
                    //userId:
                    //mealId:
                    image: img2,
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
    },
    'click #swipeLeft': function(){
        Meteor.call("SetRanImgUrl");
        var curImgUrl = $("#currentFood").attr("src");
        while(curImgUrl == Session.get("ranImgUrl")){
            Meteor.call("SetRanImgUrl");
        }
        $("#currentFood").attr("src", Session.get("ranImgUrl"));
    }
});

function callback_insert_event(error, result){
	// console.log("callback");
	// console.log(result);

    var notificationId = Notifications.success('THERE IS A MATCH!');
    Meteor.setTimeout(function(){
            FlowRouter.go("/event/" + result);
            Notifications.remove({ _id: notificationId });
        }, 1000);

	// TODO: need to check if there is an error, later	
}


Template.browseMeals.helpers({
    homeImgUrl: function(){
        Meteor.call("SetRanImgUrl");
        return Session.get("ranImgUrl");
    }
});



