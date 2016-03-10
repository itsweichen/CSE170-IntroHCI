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
		interval: false,
    wrap: false
	});

  $('#myCarousel').on('slide.bs.carousel', function (ev) {
    var id = ev.relatedTarget.id;
    if (id == "intro4"){
        $(".right").attr("disabled", "disabled");
        $("#login_intro4_2").delay(1000).animate({"opacity": "1"}, 700);
        $("#login_intro4_3").delay(2000).animate({"opacity": "1"}, 700);
        $(".right").removeAttr("disabled");
    }
  });


  //$(function(){
  console.log("swipe func loaded.");
  //Enable swiping...
  $(".carousel-inner").swipe( {
          //Generic swipe handler for all directions
          swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('prev'); 
          },
          swipeRight: function() {
            $(this).parent().carousel('next'); 
          }
  });


});

/* trying to disable to right button
Template.login.events({
    "click .right": function (event) {
      //console.log(event.target);

      
    $('#myCarousel').on('slide.bs.carousel', function (ev) {
      var id = ev.relatedTarget.id;
      if (id == "intro4"){
          $(".right").attr("disabled", "disabled");
          $(".right").delay(2000).removeAttr("disabled");
      }
    })

      if ($(event.target).is("[disabled]")) {
        console.log("disable carousel right button");
        event.preventDefault();
      }
      else {
        console.log("not disabled");
      }
    }
  });

*/



