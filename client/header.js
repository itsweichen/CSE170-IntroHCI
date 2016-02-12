Template.header.helpers({
    title: "M"
});


Template.header.events({
    'click #backBtn': function(e) {
        window.history.back();
    }
});

