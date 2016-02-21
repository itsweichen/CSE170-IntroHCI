Accounts.onLogin(function() {
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
		interval: false
	});

	/*
	$('#myCarousel').on('slide.bs.carousel', function (ev) {
		var id = ev.relatedTarget.id;
  		if (id == "last"){
  			$(".right").remove();
  		}	

	})
	*/
});

