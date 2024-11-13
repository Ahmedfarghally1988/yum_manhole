$(".show-more").click(function () {
    if($(".text").hasClass("show-more-height")) {
        $(this).text("أقل");
    } else {
        $(this).text("اقرأ المزيد");
    }

    $(".text").toggleClass("show-more-height");
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('.img_main_view').addClass('newClass');
    } else {
        $('.img_main_view').removeClass('newClass');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
        $('header').addClass('h-header');

    } else {
        $('header').removeClass('h-header');

    }
});