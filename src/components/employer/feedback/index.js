$(document).ready(function(){
    $(".btn-close-modal").on("click", function () {
        $.fancybox.close();
    });
    $('.feedback-employer-btn').on('click', function (e) {
		e.preventDefault();
		$.fancybox.open($('.feedback-employer-modal'))
	})
})
