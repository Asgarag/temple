$('.faq__question-value').slideUp();
$('.faq__question-name').click(function () {
	$('.faq__question-name').not(this).removeClass('faq__question-name--active');
	$('.faq__question-value').not($(this).next()).slideUp();
	$(this).toggleClass('faq__question-name--active').next().slideToggle();
});