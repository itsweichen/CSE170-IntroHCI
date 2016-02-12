Template.profile.helpers({
    profileUrl: "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"
});

Template.profile.events({
    'click #logout': function(){
        console.log('logout')
        Accounts.logout()
        return FlowRouter.go('login')
    }
});