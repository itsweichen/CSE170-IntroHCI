Meteor.startup(function () {
    // Load and set Facebook app configurations
    var facebookConfig = Meteor.settings.facebook;

    ServiceConfiguration.configurations.upsert({
        service: "facebook"
    }, {
        $set: {
            appId: facebookConfig.appId,
            secret: facebookConfig.secret
        }
    });
});


Meteor.startup(function () {
    if (Meteor.isClient) {
        console.log("meals foiund:" +Meals.find().count());
        if (Meals.find().count() < 1){
            console.log("found no meals");
            Meteor.call('Meals.methods.create', {
                    image:"images/home.jpg",
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
    }
});