$(".show-more").click(function () {
    if($(".text").hasClass("show-more-height")) {
        $(this).text("أقل");
    } else {
        $(this).text("اقرأ المزيد");
    }

    $(".text").toggleClass("show-more-height");
});