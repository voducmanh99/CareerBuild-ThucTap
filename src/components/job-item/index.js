$(function () {
  $(".save-job").each(function () {
    $(this).on("click", function () {
      if ($(this).hasClass('saved')) {
        $.fancybox.open($(".remove-modal"));
        $(this).removeClass("saved");
        $(this)
          .find(".text")
          .text("Save");
      } else {
        $.fancybox.open($(".success-modal"));
        $(this).addClass("saved");
        $(this)
          .find(".text")
          .text("Saved job");
      }
    });
  });
  $(".btn-close-modal").on("click", function () {
    $.fancybox.close();
  });
});