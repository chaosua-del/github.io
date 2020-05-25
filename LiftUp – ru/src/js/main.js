$(document).ready(function () {

  let input = $('#user-message');
  let symbolCount = $('.form__counter');
  let temp = 0, value = input.attr('maxlength');;

  let success = $('.success');
  let successClose = $(".success__close");

  // on click we toggle class for success
  successClose.on('click', function () {
    success.hide();
  });

  symbolCount.text(temp + '/' + value);
  // подсчет символов в поле меседж

  input.on('input keydown', () => {
    temp = input.val().length;
    symbolCount.text(temp + '/' + value);

  });



  // валидация форм
  $('.form').validate({
    errorClass: "form__error",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userMessage: {
        maxlength: 50
      },
      userPhone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      userName: {
        // required: "Имя обязательно",
        required: "Имя обязательно",
        minlength: "Слишком короткое имя",
        maxlength: "Имя не может иметь больше 15-ти символов"
      },
      userMessage: {
        // required: "Задайте вопрос",
        maxlength: "Максимальное кол-во символов 50"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введите телефон верно"
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          // console.log("AJAX сработал. Ответ сервера: Форма отправлена");
          $(form)[0].reset();
          success.show();
          // alert("Форма отправлена, мы свяжемся с вами в течении 10 минут.");
        },
        error: function (response) {
          console.error("Ошибка" + response);
        }
      });
    }
  });

  // маски для инпутов
  $('[type=tel]').mask("+38 (000) 00-000-00", {
    placeholder: "+38 (___) __-___-__"
  });

  // initialize wow
  new WOW().init();

  // scroll down
  $('.hero__button').click(function (b) {
    b.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - $('nav').outerHeight()
    },
      1000
    )
  });

  // scroll down
  $('.navigation-item').click(function (b) {
    b.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - $('nav').outerHeight()
    },
      1000
    )
  });

  // scroll down
  $('.info__button').click(function (b) {
    b.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - $('nav').outerHeight()
    },
      1000
    )
  });

  // проверка на устройство
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    $('#viber-link').attr('href', 'viber://add?number=380677017884');
  }

});