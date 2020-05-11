$(document).ready(function () {


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
        required: "Имя обязательно",
        minlength: "Слишком короткое имя",
        maxlength: "Имя не должно быть больше 15 букв"
      },
      userMessage: {
        required: "Задайте вопрос",
        maxlength: "Вопрос должен состоять из не менее  50 символов"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Телефон слишком короткий"
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
          // success.show();
          // alert("Форма отправлена, мы свяжемся с вами в течении 10 минут.");
        },
        error: function (response) {
          console.error("Ошибка" + response);
        }
      });
    }
  });


});