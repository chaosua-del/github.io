$('document').ready(function () {
  $('.carousel').carousel({
    interval: false
  })

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    navigation: {
      nextEl: '.portfolio__swiper-button-next',
      prevEl: '.portfolio__swiper-button-prev',
    },
  });

  // появление кнопки на слайдере
  $('.portfolio__swiper-slide--add').mouseover(function () {
    $('.slide-add-button').css("opacity", "1");
  }).mouseout(function () {
    $('.slide-add-button').css("opacity", "0");
  });

});