var publicRoutes = FlowRouter.group({})

publicRoutes.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('app-body', {
            main: 'login'
        });
    }
});







var loggedInRoutes = FlowRouter.group({
    triggersEnter: [
        function() {
            var route;
            if (!(Meteor.loggingIn() || Meteor.userId())) {
                route = FlowRouter.current();
                if (route.route.name !== 'login') {
                    Session.set('redirectAfterLogin', route.path);
                }
                return FlowRouter.go('login');
            }
        }
    ]
})

loggedInRoutes.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('app-body', {
            main: 'home',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/post-meal', {
    name: 'post-meal',
    action() {
        BlazeLayout.render('app-body', {
            main: 'post-meal',
            footer: 'footer'
        });
    }
});