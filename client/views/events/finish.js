Template.finish.helpers({
    event: function(){
        //console.log(Events.findOne())
        return Events.findOne()
    }
});

Template.finish.events({
	"click #liked": function(){

        var notificationId = Notifications.success('LIKED!');
        Meteor.setTimeout(function(){
            Notifications.remove({ _id: notificationId });
        }, 500);
	},
	'click #disliked': function(){
        var notificationId = Notifications.success('DISLIKED!');
        Meteor.setTimeout(function(){
            Notifications.remove({ _id: notificationId });
        }, 500);
   },
   	'click #request-chat': function(){
        var notificationId = Notifications.success('CHAT REQUESTED!');
        Meteor.setTimeout(function(){
            Notifications.remove({ _id: notificationId });
        }, 500);
    }
});