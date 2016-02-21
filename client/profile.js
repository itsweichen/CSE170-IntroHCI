Template.profile.helpers({
    profileUrl: function(){
    	var url = "http://graph.facebook.com/" + Meteor.users.findOne(Meteor.userId())["services"]["facebook"]["id"] + "/picture/?type=large";
    	return url;
    } 

});

Template.profile.events({
    'click #logout': function(){
        Accounts.logout();
        return FlowRouter.go('login')
    }
});