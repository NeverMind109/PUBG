$(function () {
  const firstTab = new Swiper(".functions__slider-tab-1", {
    loop: true,
    navigation: {
      nextEl: ".tab-1-next",
      prevEl: ".tab-1-prev",
    },
  });
  const secondTab = new Swiper(".functions__slider-tab-2", {
    loop: false,
    navigation: {
      nextEl: ".tab-2-next",
      prevEl: ".tab-2-prev",
    },
  });
  const thirdTab = new Swiper(".functions__slider-tab-3", {
    loop: false,
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
});
