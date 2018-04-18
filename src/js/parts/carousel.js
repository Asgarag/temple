$(".owl-carousel").owlCarousel({
	items: 1,
	autoplay: true,
	loop: true,
	navText: ["",""],
	responsiveClass: true,
	responsive:{
		0:{
			nav: false
		},
		480:{
			nav: true
		}
	}
});