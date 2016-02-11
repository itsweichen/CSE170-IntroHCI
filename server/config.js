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