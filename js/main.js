$(document).ready(function(){
    $('.js_tabs-link').on('click', function(e){
        e.preventDefault();
        var tabNum = $(this).attr('href');
        $(this).addClass('tab-active');
        $(this).parent().siblings().find('.js_tabs-link').removeClass('tab-active');
        $(tabNum).show(400);
        $(tabNum).addClass('.tab-active');
        $(tabNum).siblings().hide(400);
        $(tabNum).siblings().removeClass('.tab-active');
    });
});

$('.testimonials_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    appendArrows: $('.testimonials_nav'),
    prevArrow: '<button class="testimonials_arrow testimonials_prev"><i class="icon-angle-down"></i></button>',
    nextArrow: '<button class="testimonials_arrow testimonials_next"><i class="icon-angle-down"></i></button>'
  });

// пример работы с fake_placeholder комменты к Lesson6
// if($('.form_input').val() !== '') {
//   $('.form_input').next('.fake_placeholder').hide(300);
// }

