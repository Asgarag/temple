$('.audio__filebox').slideUp();
$('.audio__play').click(function () {
	$(this).parent().parent().parent().next().slideToggle();
});