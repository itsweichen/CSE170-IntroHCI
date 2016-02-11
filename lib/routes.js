var publicRoutes = FlowRouter.group({})

publicRoutes.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('app-body', {
            main: 'login',
            header: 'header'
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
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/post-meal', {
    name: 'post-meal',
    action() {
        BlazeLayout.render('app-body', {
            main: 'post-meal',
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/my-events', {
    name: 'events',
    action() {
        BlazeLayout.render('app-body', {
            main: 'events',
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/drop', {
    name: 'drop',
    action() {
        BlazeLayout.render('app-body', {
            main: 'drop',
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/find-your-meal', {
    name: 'find-your-meal',
    action() {
        BlazeLayout.render('app-body', {
            main: 'find-your-meal', // how to create sub-template?
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/drop-wait', {
    name: 'drop-wait',
    action() {
        BlazeLayout.render('app-body', {
            main: 'drop-wait', // how to create sub-template?
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/finish', {
    name: 'finish',
    action() {
        BlazeLayout.render('app-body', {
            main: 'finish', // how to create sub-template?
            header: 'header',
            footer: 'footer'
        });
    }
});