$(document).ready(function () {
    $('.form-text input').blur(function () {
        if ($(this).val()) {
            $(this).addClass('label-active');
        } else {
            $(this).removeClass('label-active');
        }
	});
	
})
