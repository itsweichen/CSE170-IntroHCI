Meteor.methods({
    "Meals.methods.create": function (data) {
        Meals.insert({
            image: data.imageURL,
            name: data.name,
            time: data.time,
            createdAt: data.createdAt,
            location: data.location,
            createdBy: data.createdBy
        });
    }
});