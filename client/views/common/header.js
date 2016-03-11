Template.header.events({
    'click #backBtn': function (e) {
        window.history.back();
    }
});

Template.header.helpers({
    partnerId: function () {
        var pid = FlowRouter.getParam("partner");
        console.log(pid);
        return pid;
    }
});