$(document).ready(function () {
	$('.menu__search-button').click(function () {
		$('.menu__search').toggleClass('menu__search--active');
	});
	$('.menu__switch').click(function () {
		$('.menu__list').addClass('menu__list--active');
	});
	
	$('.menu__close').click(function () {
		$('.menu__list').removeClass('menu__list--active');
	});
	
	if ($(window).width() < 950) {
		$('.menu__list-hidden').slideUp();
		$('.menu__link').click(function(){
			if ($(this).next().next().hasClass('menu__icon-accordion--active'))
			{
				$('.menu__list-hidden').slideUp().next().removeClass('menu__icon-accordion--active');
			}
			else
			{
				$('.menu__list-hidden').slideUp().next().removeClass('menu__icon-accordion--active');
				$(this).next().next().addClass('menu__icon-accordion--active');
			}
			$(this).next().stop().slideToggle();
		});
	}
});