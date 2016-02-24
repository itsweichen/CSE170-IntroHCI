Template.my_meals.helpers({
	/*
    my_meals: [
    	{
			image: "images/food1.jpg",
			time: "1:00pm 02/15/2016",
			location: "UCSD"
    	}
    ]
    */

    my_meals: function() {
    	//return Meals.find({user: Meteor.user()._id}, {sort: {createdAt: -1}});
		return Meals.find();
    }
});