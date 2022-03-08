$(function () {
  const firstTab = new Swiper(".functions__slider-tab-1", {
    loop: true,
    navigation: {
      nextEl: ".tab-1-next",
      prevEl: ".tab-1-prev",
    },
  });
  const secondTab = new Swiper(".functions__slider-tab-2", {
    loop: true,
    navigation: {
      nextEl: ".tab-2-next",
      prevEl: ".tab-2-prev",
    },
  });
  const thirdTab = new Swiper(".functions__slider-tab-3", {
    loop: true,
    navigation: {
      nextEl: ".tab-3-next",
      prevEl: ".tab-3-prev",
    },
  });
  $(".functions__tab").on("click", function (e) {
    e.preventDefault();
    $(".functions__tab").removeClass("functions__tab--active");
    $(this).addClass("functions__tab--active");

    $(".functions__content").removeClass("functions__content--active");
    $($(this).attr("href")).addClass("functions__content--active");
  });

  const reviews = new Swiper(".reviews__slider", {
    loop: true,
    navigation: {
      nextEl: ".reviews-next",
      prevEl: ".reviews-prev",
    },
  });

  $(".prices__tab").on("click", function (e) {
    e.preventDefault();
    $(".prices__tab").removeClass("prices__tab--active");
    $(this).addClass("prices__tab--active");

    $(".prices__content").removeClass("prices__content--active");
    $($(this).attr("href")).addClass("prices__content--active");
  });

  $(".questions__item-title").on("click", function () {
    $(this).toggleClass("accordion--active").next().slideToggle();
    $(".questions__item-title")
      .not(this)
      .removeClass("accordion--active")
      .next()
      .slideUp();
  });
  $(".questions__item-title")
    .first()
    .addClass("accordion--active")
    .next()
    .slideToggle();

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - -20,
        },
        500
      );
  });

  $(".menu-mobile").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("overflow-hidden");
    $(".menu__list-link").on("click", function () {
      $(".menu").removeClass("menu--active");
      $("body").removeClass("overflow-hidden");
    });
    $(".logo").on("click", function () {
      $(".menu").removeClass("menu--active");
      $("body").removeClass("overflow-hidden");
    });
  });

  var openModalUser = $("[data-toggle=user-modal]");
  var overlayClick = $(".modal__overlay");
  var closeModalUser = $(".modal__close");
  openModalUser.on("click", openModal);
  overlayClick.on("click", closeModal);
  closeModalUser.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal)
      .find(".modal__user-profile")
      .addClass("modal__user-profile--visible");
    $("body").toggleClass("overflow-hidden");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__user-profile");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__user-profile--visible");
    $("body").removeClass("overflow-hidden");
  }

  $(".modal__tab").on("click", function (e) {
    e.preventDefault();
    $(".modal__tab").removeClass("modal__tab--active");
    $(this).addClass("modal__tab--active");

    $(".modal__tab-content").removeClass("modal__tab-content--active");
    $($(this).attr("href")).addClass("modal__tab-content--active");
  });

  $(".contacts__form").each(function () {
    $(this).validate({
      errorClass: "invalid-feedback",
      messages: {
        name: {
          minlength: "Ваше имя должно быть длиннее 2 символов",
        },
        email: {
          email:
            "Ваш почтовый адрес должен соответствовать формату name@domain.com",
        },
      },
    });
  });

  $(".modal__register").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          minlength: "Ваше имя должно быть длиннее 2 символов",
        },
        password: {
          minlength: "Пароль должнен быть длиннее 6 символов",
          maxlength: "Пароль не может быть длинее 30 символов",
        },
        password_again: {
          required: "Пожалуйста, повторите пароль",
        },
        email: {
          email:
            "Ваш почтовый адрес должен соответствовать формату name@domain.com",
        },
        checkbox: {
          required: "Чтобы завершить регистрацию примите правила",
        },
      },
    });
  });

  $(".modal__login").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите свой логин или email",
          minlength: "Ваше логин должен быть длиннее 2 символов",
        },
      },
    });
  });

  new WOW().init();
});
