$(window).scroll(function () {
	var scTop = $(this).scrollTop()
	if (scTop > 200) {
		$('.header-wrapper').css('transform', 'translateY(-100%)')
		$('.header-wrapper').css('transform')
		$('.header-wrapper').addClass('active')
		$('.header-wrapper').css('transform', 'translateY(0)')
	} else {
		$('.header-wrapper').css('transform', 'translateY(0)')
		$('.header-wrapper').removeClass('active')
	}
})

$('.mo-bars').click(function() {
	$('.monavi-wrapper').toggleClass('active')
})