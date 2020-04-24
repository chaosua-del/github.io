$('document').ready(function () {
  $('.carousel').carousel({
    interval: false
  })

  var swiper = new Swiper('.portfolio__swiper-container', {
    slidesPerView: 3,
    centeredSlides: false,
    navigation: {
      nextEl: '.portfolio__swiper-button-next',
      prevEl: '.portfolio__swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.feedback__swiper-container', {
    // loop: true,
    slidesPerView: '2',
    centeredSlides: true,
    // spaceBetween: -130,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
      var swiper = new Swiper('.portfolio__swiper-container', {
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.portfolio__swiper-button-next',
          prevEl: '.portfolio__swiper-button-prev',
        },
      });
    }
  })

  if ($(window).width() < 1250) {
    var swiper = new Swiper('.portfolio__swiper-container', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.portfolio__swiper-button-next',
        prevEl: '.portfolio__swiper-button-prev',
      },
    });
  }

  $(window).on('resize', function () {
    if ($(window).width() < 1250 && $(window).width() > 992) {
      var swiper = new Swiper('.portfolio__swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: -73,
        navigation: {
          nextEl: '.portfolio__swiper-button-next',
          prevEl: '.portfolio__swiper-button-prev',
        },
      });
    }
  })

  if ($(window).width() < 1250 && $(window).width() > 992) {
    var swiper = new Swiper('.portfolio__swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: -73,
      navigation: {
        nextEl: '.portfolio__swiper-button-next',
        prevEl: '.portfolio__swiper-button-prev',
      },
    });
  }

  // video-play
  // var tag = document.createElement('script');
  // tag.src = "https://www.youtube.com/iframe_api";
  var player;

  $('.services__video-play').on('click', function () {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'GeVQpsbdqRQ',
      events: {
        'onReady': onPlayerReady,
      }
    });
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  }

});