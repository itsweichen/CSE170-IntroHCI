Accounts.onLogin(function() {
    var redirect = Session.get('redirectAfterLogin');
    if (redirect) {
        if (redirect !== '/login') {
            return FlowRouter.go(redirect);
        }
    } else {
        return FlowRouter.go(home);
    }
});