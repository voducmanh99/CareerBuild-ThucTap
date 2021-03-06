$(document).ready(function () {
	$('.side-navbar .toggle-nav').on('click', function () {
		$(this).toggleClass('active')
		$('.page-content').toggleClass('page-content-active')
		$('.side-navbar .list-unstyled li .list-unstyled').slideUp('fast')
		$('.side-navbar .list-unstyled li a.collapse').removeClass('active')
	})
	$('.side-navbar .list-unstyled li').each(function () {
		if ($(this).hasClass('show-list-unstyled')) {
			$(this).find('a.collapse').addClass('active')
			$(this).find('.list-unstyled.collapse').slideDown()
		}
	})
	$('.side-navbar .list-unstyled li a.collapse').each(function () {
		$(this).on('click', function (e) {
			if ($('.page-content').hasClass('page-content-active')) {
				$('.page-content').removeClass('page-content-active')
				if ($(this).next().is(":hidden") == true) {
					e.preventDefault()
					setTimeout(() => {
						$('.side-navbar .list-unstyled li a.collapse').removeClass('active')
						$(this).addClass('active')
						$('.side-navbar .list-unstyled li .list-unstyled.collapse').slideUp()
						$(this).next().slideDown()
					}, 500);
				} else {
					setTimeout(() => {

						$(this).removeClass('active')
						$('.side-navbar .list-unstyled li .list-unstyled.collapse').slideUp()
					}, 100);
				}
			} else {
				$('.page-content').removeClass('page-content-active')
				if ($(this).next().is(":hidden") == true) {
					e.preventDefault()
					setTimeout(() => {
						$('.side-navbar .list-unstyled li a.collapse').removeClass('active')
						$(this).addClass('active')
						$('.side-navbar .list-unstyled li .list-unstyled.collapse').slideUp()
						$(this).next().slideDown()
					}, 100);
				} else {
					setTimeout(() => {

						$(this).removeClass('active')
						$('.side-navbar .list-unstyled li .list-unstyled.collapse').slideUp()
					}, 100);
				}
			}
		})
	})

	var isIE = /*@cc_on!@*/ false || !!document.documentMode
	if (isIE == true) {
		$('body').addClass('is-browser-IE')
	} else {
		$('body').removeClass('is-browser-IE')
	}
})
