var publicRoutes = FlowRouter.group({});

publicRoutes.route('/login', {
    name: 'login',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'login',
            //header: 'header'
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
});

loggedInRoutes.route('/', {
    name: 'browseMeals',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'browseMeals',
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/post-meal', {
    name: 'postMeal',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'postMeal',
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/events/', {
    name: 'events',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'events',
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/event/:id', {
    name: 'event',
    action: function (params) {
        BlazeLayout.render('app-body', {
            main: 'eventDetails',
            header: 'header',
            footer: 'footer'
        });
    }
});
//
//loggedInRoutes.route('/drop', {
//    name: 'drop',
//    action: function () {
//        BlazeLayout.render('app-body', {
//            main: 'drop',
//            header: 'header',
//            footer: 'footer'
//        });
//    }
//});
//
//loggedInRoutes.route('/find-your-meal', {
//    name: 'find-your-meal',
//    action: function () {
//        BlazeLayout.render('app-body', {
//            main: 'find-your-meal', // how to create sub-template?
//            header: 'header',
//            footer: 'footer'
//        });
//    }
//});
//
//loggedInRoutes.route('/drop-wait', {
//    name: 'drop-wait',
//    action: function () {
//        BlazeLayout.render('app-body', {
//            main: 'drop-wait', // how to create sub-template?
//            header: 'header',
//            footer: 'footer'
//        });
//    }
//});
//
//loggedInRoutes.route('/finish', {
//    name: 'finish',
//    action: function () {
//        BlazeLayout.render('app-body', {
//            main: 'finish', // how to create sub-template?
//            header: 'header',
//            footer: 'footer'
//        });
//    }
//});

loggedInRoutes.route('/chats', {
    name: 'chats',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'chats',
            header: 'header',
            footer: 'footer'
        });
    }
});

loggedInRoutes.route('/chat/:partner', {
    name: 'chat',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'chat',
            header: 'header',
            footer: 'footer'
        });
    }
});


loggedInRoutes.route('/my-meals', {
    name: 'my_meals',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'my_meals',
            header: 'header',
            footer: 'footer'
        });
    }
});


loggedInRoutes.route('/profile', {
    name: 'profile',
    action: function () {
        BlazeLayout.render('app-body', {
            main: 'profile',
            header: 'header',
            footer: 'footer'
        });
    }
});
