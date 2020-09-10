function autoComplete() {
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

function clearText() {
	setInterval(function () {
		var text = $.trim($("#searchautocomplate").val())
		if (text != "") {
			$('.cleartext').addClass('active')
		} else {
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
		},
	});
}
$(document).ready(function () {
	autoComplete()
	clearText()
	initSlide()
	$('.feedback-btn').on('click', function (e) {
		e.preventDefault();
		$.fancybox.open($('.feedback-modal'))
	})
	$('.widget-5 .widget-body .title h4').on('click', function () {
		$.fancybox.open($(".salary-calculator-modal"));
	})
	$("input[data-type='currency']").on({
		keyup: function () {
			formatCurrency($(this));
		},
		blur: function () {
			formatCurrency($(this), "blur");
		}
	});
	$('.feedback-btn').on('click', function (e) {
		e.preventDefault();
		$.fancybox.open($('.feedback-modal'))
	})
	$("footer .back-to-top").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});
	$(".chosen-select-max-five").chosen({
		max_selected_options: 5
	  })

})

function formatNumber(n) {
	return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function formatCurrency(input, blur) {
	// appends $ to value, validates decimal side
	// and puts cursor back in right position.

	// get input value
	var input_val = input.val();

	// don't validate empty input
	if (input_val === "") {
		return;
	}

	// original length
	var original_len = input_val.length;

	// initial caret position
	var caret_pos = input.prop("selectionStart");

	// check for decimal
	if (input_val.indexOf(",") >= 0) {

		// get position of first decimal
		// this prevents multiple decimals from
		// being entered
		var decimal_pos = input_val.indexOf(",");

		// split number by decimal point
		var left_side = input_val.substring(0, decimal_pos);
		var right_side = input_val.substring(decimal_pos);

		// add commas to left side of number
		left_side = formatNumber(left_side);

		// validate right side
		right_side = formatNumber(right_side);

		// On blur make sure 2 numbers after decimal
		if (blur === "blur") {
			right_side += "";
		}

		// Limit decimal to only 2 digits
		right_side = right_side.substring(0, 2);

		// join number by .
		input_val = left_side + "," + right_side;

	} else {
		// no decimal entered
		// add commas to number
		// remove all non-digits
		input_val = formatNumber(input_val);
		input_val = input_val;

		// final formatting
		if (blur === "blur") {
			input_val += "";
		}
	}

	// send updated string to input
	input.val(input_val);

	// put caret back in the right position
	var updated_len = input_val.length;
	caret_pos = updated_len - original_len + caret_pos;
	input[0].setSelectionRange(caret_pos, caret_pos);
}

