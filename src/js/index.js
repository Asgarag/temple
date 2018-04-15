function initMap() {
	var uluru = {lat: 51.4950818, lng: -0.2067456};
	var map = new google.maps.Map(document.querySelector(".map"), {
		zoom: 17,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: 'images/marker.png'
	});
}

$(document).ready(function () {
	$(".preview__button").click(function () {
		event.preventDefault();
		var header = $(".js-header").height();
		var scrollTop = $('#biometrics').offset().top - header;
		$('body,html').animate({
			scrollTop: scrollTop
		}, 600);
	});

	if ($(window).width() >= 600) {
		$(window).scroll(function () {
			var headertop = $(".js-header").offset().top;
			if ($(window).scrollTop() >= headertop) {
				$(".header").addClass("header--fixed");
			}
			if ($(window).scrollTop() < 90) {
				$(".header").removeClass("header--fixed");
			}
		});
	}
	else {
		$(".header").addClass("header--fixed");
	}

	$(window).scroll(function () {
		var header = $(".js-header").height() + 1;
		var headertop = $('#biometrics').offset().top - header;
		if ($(window).scrollTop() >= headertop) {
			$(".page__scroll").addClass("page__scroll--active");
		} else {
			$(".page__scroll").removeClass("page__scroll--active");
		}
	});

	$(".page__scroll").click(function () {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
	});

	$(".menu__link[href=\"#biometrics\"]").click(function () {
		event.preventDefault();
		var header = $(".js-header").height();
		var scrollTop = $('#biometrics').offset().top - header;
		$('body,html').animate({
			scrollTop: scrollTop
		}, 600);
		$(".menu").removeClass("menu--active");
	});

	$(".menu__link[href=\"#advantages\"]").click(function () {
		event.preventDefault();
		var header = $(".js-header").height();
		var scrollTop = $('#advantages').offset().top - header;
		$('body,html').animate({
			scrollTop: scrollTop
		}, 600);
		$(".menu").removeClass("menu--active");
	});

	$(".menu__link[href=\"#products\"]").click(function () {
		event.preventDefault();
		var header = $(".js-header").height();
		var scrollTop = $('#products').offset().top - header;
		$('body,html').animate({
			scrollTop: scrollTop
		}, 600);
		$(".menu").removeClass("menu--active");
	});

	$(".menu__link[href=\"#monetization\"]").click(function () {
		event.preventDefault();
		var header = $(".js-header").height();
		var scrollTop = $('#monetization').offset().top - header;
		$('body,html').animate({
			scrollTop: scrollTop
		}, 600);
		$(".menu").removeClass("menu--active");
	});

	$(".menu__link[href=\"#team\"]").click(function () {
		event.preventDefault();
		var header = $(".js-header").height();
		var scrollTop = $('#team').offset().top - header;
		$('body,html').animate({
			scrollTop: scrollTop
		}, 600);
		$(".menu").removeClass("menu--active");
	});

	$(".menu__link[href=\"#contacts\"]").click(function () {
		event.preventDefault();
		var header = $(".js-header").height();
		var scrollTop = $('#contacts').offset().top - header;
		$('body,html').animate({
			scrollTop: scrollTop
		}, 600);
		$(".menu").removeClass("menu--active");
	});

	$(".header__button").click(function () {
		$(".menu").addClass("menu--active");
	});

	$(".menu__close").click(function () {
		$(".menu").removeClass("menu--active");
	});

	if ($(".page").width() >= 720) {
		$(".js-animate-fadeinup").addClass("hidden").viewportChecker({
			classToAdd: "animated fadeInUp",
			classToRemove: "hidden",
			removeClassAfterAnimation: "animated fadeInUp",
			offset: 100
		});

		$(".js-animate-fadeinleft").addClass("hidden").viewportChecker({
			classToAdd: "animated fadeInLeft",
			classToRemove: "hidden",
			removeClassAfterAnimation: "animated fadeInLeft",
			offset: 100
		});

		$(".js-animate-fadeinright").addClass("hidden").viewportChecker({
			classToAdd: "animated fadeInRight",
			classToRemove: "hidden",
			removeClassAfterAnimation: "animated fadeInRight",
			offset: 100,
			callbackFunction: function(elem) {
				$(elem).parent().addClass("overflow-hidden");
				setTimeout( function() {
					$(elem).parent().removeClass("overflow-hidden");
				}, 2000);
			}
		});

		$(".js-animate-slideinleft").addClass("hidden").viewportChecker({
			classToAdd: "animated slideInLeft",
			classToRemove: "hidden",
			removeClassAfterAnimation: "animated slideInLeft",
			offset: 100
		});

		$(".js-animate-slideinright").addClass("hidden").viewportChecker({
			classToAdd: "animated slideInRight",
			classToRemove: "hidden",
			removeClassAfterAnimation: "animated slideInRight",
			offset: 100,
			callbackFunction: function(elem) {
				$(elem).parent().addClass("overflow-hidden");
				setTimeout( function() {
					$(elem).parent().removeClass("overflow-hidden");
				}, 2000);
			}
		});

		$(".js-animate-slideinup").addClass("hidden").viewportChecker({
			classToAdd: "animated slideInUp",
			classToRemove: "hidden",
			removeClassAfterAnimation: "animated slideInUp",
			offset: 100
		});
	}
});
