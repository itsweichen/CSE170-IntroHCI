Meteor.startup(function () {
    //we need to do this on the client so we can get the current userID
    console.log(Meals.find().count());
    Meteor.call("SetRanImgUrl");
    if (Meals.find().count() == 0) {
        Meteor.call('Meals.methods.create', {
                imageURL: Session.get("ranImgUrl"),
                name: "foo",
                time: "02/10/2016 12:00 AM",
                createdAt: new Date(),
                location: "UCSD",
                createdBy: Meteor.userId()
            },
            function (error, response) {
                if (error) {
                    alert(error);
                } else {
                    console.log("meal inserted")
                } //d
            }
        )
    }
});