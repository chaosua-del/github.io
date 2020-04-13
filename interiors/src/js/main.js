$('document').ready(function () {
  $('.carousel').carousel({
    interval: false
  })

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: false,
    navigation: {
      nextEl: '.portfolio__swiper-button-next',
      prevEl: '.portfolio__swiper-button-prev',
    },
  });

  // // появление кнопки на слайдере
  // $('.portfolio__swiper-slide--add').mouseover(function () {
  //   $('.slide-add-button').css("opacity", "1");
  // }).mouseout(function () {
  //   $('.slide-add-button').css("opacity", "0");
  // });

  $(window).on('resize', function () {
    if ($(window).width() < 1250) {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.portfolio__swiper-button-next',
          prevEl: '.portfolio__swiper-button-prev',
        },
      });
    }
  })

  if ($(window).width() < 1250) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.portfolio__swiper-button-next',
        prevEl: '.portfolio__swiper-button-prev',
      },
    });
  }


});