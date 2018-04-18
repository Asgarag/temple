$(".question__button").click(function () {
	$(".modal").addClass('modal--active');
	return false;
});

$(".modal__close").click(function () {
	$(".modal").removeClass('modal--active');
});