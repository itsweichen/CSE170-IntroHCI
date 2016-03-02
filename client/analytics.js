Template.footer.events({
    'click #bottomNav': function(){
        console.log("clicked footer");
        analytics.track("clicked footer");
    }
});

Template.header.events({
    'click #backBtn': function(){
        console.log("clicked back");
        analytics.track("clicked back");
    }
});
