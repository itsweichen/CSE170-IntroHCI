Meteor.startup(function() {
    if (Meals.find().count() === 0){
        var meals = [
            {
                image: "images/food1.jpg",
                name: "food1",
                time: "02/26/2016 12:00 AM",
                location: "UCSD CSE building",
                user: "1",
                createdAt: new Date()
            }, {
                image: "images/food1.jpg",
                name: "food1",
                time: "02/26/2016 12:00 AM",
                location: "UCSD Geisel",
                user: "1",
                createdAt: new Date()
            }
        ];
        _.each(meals, function(meal) {
            Meals.insert(meal);
            console.log("inserted meal" + meal);
        });
    }


    if (Chats.find().count() === 0){
        var chats = [
            {
                handshake: true,
                pageUrl: "/chat/mysterymeet",
                myFoodImg: "images/support-logo.JPG",
                partnerFoodImg: "images/support-logo.JPG",
                name: "Mystery Meet Support"
            },
            {
                handshake: false,
                pageUrl: "/chat/user1",
                myFoodImg: "images/food1.jpg",
                partnerFoodImg: "images/food2.jpg",
                name: "User1"
            },
            {
                handshake: false,
                pageUrl: "/chat/user2",
                myFoodImg: "images/food1.jpg",
                partnerFoodImg: "images/food3.jpg",
                name: "User2"
            },
            {
                handshake: false,
                pageUrl: "/chat/user3",
                myFoodImg: "images/food1.jpg",
                partnerFoodImg: "images/food5.jpg",
                name: "User3"
            },
            {
                handshake: true,
                pageUrl: "/chat/user4",
                myFoodImg: "images/food3.jpg",
                partnerFoodImg: "images/food4.jpg",
                name: "User4"
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
                isUpcoming: true,
                pageUrl: "/drop",
                myFoodImg: "images/food1.jpg",
                partnerFoodImg: "images/food2.jpg",
                time: "1:00pm 02/15/2016",
                location: "UCSD",
                labelType: "label label-primary",
                labelContent: "Waiting to drop"
            },
            {
                isUpcoming: true,
                pageUrl: "/find-your-meal",
                myFoodImg: "images/food1.jpg",
                partnerFoodImg: "images/food3.jpg",
                time: "1:30pm 02/18/2016",
                location: "UCSD",
                labelType: "label label-primary",
                labelContent: "Find your meal"
            },
            {
                isUpcoming: true,
                pageUrl: "/drop-wait",
                myFoodImg: "images/food1.jpg",
                partnerFoodImg: "images/food5.jpg",
                time: "1:30pm 02/18/2016",
                location: "UCSD",
                labelType: "label label-success",
                labelContent: "You dropped. Waiting for other"
            },
            {
                isUpcoming: false,
                pageUrl: "/finish",
                myFoodImg: "images/food3.jpg",
                partnerFoodImg: "images/food4.jpg",
                time: "1:00pm 02/15/2016",
                location: "UCSD",
                labelType: "label label-default",
                labelContent: "Finished"
            }
        ];
        _.each(events, function(event) {
            Events.insert(event);
            console.log("inserted event" + event);
        });
    }
});








