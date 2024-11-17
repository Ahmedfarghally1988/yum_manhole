$(".show-more").click(function () {
    if($(".text").hasClass("show-more-height")) {
        $(this).text("أقل");
    } else {
        $(this).text("اقرأ المزيد");
    }

    $(".text").toggleClass("show-more-height");
});

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 500) {
//         $('.img_main_view').addClass('newClass');
//     } else {
//         $('.img_main_view').removeClass('newClass');
//     }
// });
//
