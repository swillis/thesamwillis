console.log("Message from the author: Thanks for visiting! If you have any tips on how I can improve this site, please email them to hello@thesamwillis.com.");

$(window).load(function() {
	$('.details').removeClass('hide').addClass('animated fadeInRight');

	$('.profile-picture').removeClass('hide').addClass('animated fadeInLeft');

	$('.title').removeClass('hide').addClass('animated fadeInDown');

	$('.social-icons').removeClass('hide').addClass('animated fadeInUp');
});

$('.email').popover();