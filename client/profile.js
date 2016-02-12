

Template.profile.helpers({
    profileUrl: "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"
});