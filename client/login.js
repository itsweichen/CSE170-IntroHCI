Accounts.onLogin(function () {
    var redirect = Session.get('redirectAfterLogin');
    if (redirect) {
        if (redirect !== '/login') {
            return FlowRouter.go(redirect);
        }
    } else {
        return FlowRouter.go('browseMeals');
    }
});

Template.login.onRendered(function () {
    this.$(".carousel").carousel({
        interval: false,
        wrap: false
    });

    console.log("swipe func loaded.");
    //Enable swiping...
    $(".carousel-inner").swipe({
        //Generic swipe handler for all directions
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function () {
            $(this).parent().carousel('prev');
        }
    });
});



