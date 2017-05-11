$(document).ready(function () {

	$(document).foundation();

	$('.first-carousel').slick({
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.sliders').slick({
		autoplay: true,
		autoplaySpeed: 1500
	});

	$('.revs').slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000
	});

	var magellan = new Foundation.Magellan($('.header-magellan').eq(0),{
		'deepLinking' : true
	});
});