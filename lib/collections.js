
		
	Meals = new Mongo.Collection("meals");
	Messages = new Mongo.Collection("messages");
	Events = new Mongo.Collection("events");
	
	// remove all meals
	Meals.remove({});
    
	// insert several dummy data
	Meals.insert({
            image: "images/food1.jpg",
            name: "food1",
            time: "02/26/2016 12:00 AM",
            location: "UCSD CSE building",
            user: "1",
            createdAt: new Date()
        });

	Meals.insert({
            image: "images/food1.jpg",
            name: "food1",
            time: "02/26/2016 12:00 AM",
            location: "UCSD Geisel",
            user: "1",
            createdAt: new Date()
        });

	

