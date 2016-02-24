Meteor.startup(function () {
    //we need to do this on the client so we can get the current userID
    if (Meals.find().count() === 0){
        Meteor.call('Meals.methods.create', {
                imageURL:"images/home.jpg",
                name:"foo",
                time:"foo",
                createdAt:"foo",
                location:"foo",
                createdBy: Meteor.userId()
            },
            function (error, response) {
                if (error) {
                    alert(error);
                } else {
                    console.log("meal inserted")
                }
            }
        )
    }
});