
function autoComplete(){
	$('#searchautocomplate').autoComplete({
		minChars: 1,
		source: function (term, suggest) {
		term = term.toLowerCase();
		var choices = ['Market Research', 'Brand Management', 'Advertising', 'Promotions', 'Public Relations'];
		var matches = [];
		for (i = 0; i < choices.length; i++)
			if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
		suggest(matches);
		}
	});
}
function clearText(){
	setInterval(function () {
		var text = $.trim($("#searchautocomplate").val())
		if (text != "") {
			$('.cleartext').addClass('active')
		}else{
			$('.cleartext').removeClass('active')
		}

	}, 100)
	$('.cleartext').click(function () {
		$('#searchautocomplate').val('');
	});
}
function initSlide() {
	return new Swiper(".home-salary-2 .swiper-container", {
		loop: true,
		// slidesPerColumn: 2,
		slidesPerView: 3,
		spaceBetween: 30,
		breakpoints: {
			576: {
				slidesPerView: 1,
			},
			1025: {
				slidesPerView: 2,
			}
		},
		pagination: {
			el: '.home-salary-2 .swiper-pagination',
			type: 'bullets',
			clickable: true
		},
	});
}
$(document).ready(function(){
	autoComplete()
	clearText()
	initSlide()
	$('.feedback-btn').on('click', function (e) {
		e.preventDefault();
		$.fancybox.open($('.feedback-modal'))
	})
	$("footer .back-to-top").click(function () {
		$("html, body").animate({scrollTop: 0}, 1000);
	});
	$('.open-modal-salary-alculator').on('click', function (e) {
		e.preventDefault();
		$.fancybox.open($('.salary-calculator-2-modal'))
	})
})
