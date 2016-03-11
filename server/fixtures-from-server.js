Meteor.startup(function() {
    if (Chats.find().count() === 0){
        var chats = [
            {
                handshake: true,
                pageUrl: "/chat/mysterymeet",
                myFoodImg: "/images/support-logo.JPG",
                partnerFoodImg: "/images/support-logo.JPG",
                name: "Mystery Meet Support"
            },
            {
                handshake: false,
                pageUrl: "/chat/user1",
                myFoodImg: "/images/food1.jpg",
                partnerFoodImg: "/images/food2.jpg",
                name: "User1"
            },
            {
                handshake: false,
                pageUrl: "/chat/user2",
                myFoodImg: "/images/food1.jpg",
                partnerFoodImg: "/images/food3.jpg",
                name: "User2"
            },
            {
                handshake: true,
                pageUrl: "/chat/scott",
                myFoodImg: "/images/scott.jpg",
                partnerFoodImg: "/images/food5.jpg",
                name: "Scott"
            },
            {
                handshake: true,
                pageUrl: "/chat/yasmine",
                myFoodImg: "/images/yasmine.jpg",
                partnerFoodImg: "/images/food4.jpg",
                name: "Yasmine"
            }
        ];
        _.each(chats, function(chat) {
            Chats.insert(chat);
            console.log("inserted chat" + chat);
        });
    }

    if (Events.find().count() === 0) {
        var events = [
            {
                user1: {
                    //userId:
                    //mealId:
                    image: "/images/food1.jpg",
                    hasDropped: false,
                    hasPickedUp: false,
                    askedToChat: false,
                    likedMeal: null,
                },
                user2: {
                    //userId:
                    //mealId:
                    image: "/images/food2.jpg",
                    hasDropped: false,
                    hasPickedUp: false,
                    askedToChat: false,
                    likedMeal: null
                },
                time: "1:00pm 02/15/2016",
                location: "32.8800649, -117.236202217",
                canceled: false,
                isUpcoming: true,
                status: 1 // 1: eventDetail; 2: drop-wait; 3: find-your-meal; 4: finish
            }
        ];
        _.each(events, function(event) {
            Events.insert(event);
            console.log("inserted event" + event);
        });
    }
});








