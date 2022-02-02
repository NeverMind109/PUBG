$(function () {
  $(".functions__slider-tab1").slick({
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button class="tabs-buttons tabs-next"><svg width="61" height="32" viewBox="0 0 61 32" xmlns="http://www.w3.org/2000/svg"><linearGradient id="linear-gradient"><stop offset="-7.86%" stop-color="#0AA6FE"/><stop offset="96.71%" stop-color="#00E0FF"/></linearGradient><path d="M16.5208 0L0 16L16.5208 32L18.3178 30.2597L4.86475 17.2308H61V14.7692H4.86475L18.3178 1.74031L16.5208 0Z"/></svg></button>',
    prevArrow:
      '<button class="tabs-buttons tabs-prev"><svg width="61" height="32" viewBox="0 0 61 32" xmlns="http://www.w3.org/2000/svg"><linearGradient id="linear-gradient"><stop offset="-7.86%" stop-color="#0AA6FE"/><stop offset="96.71%" stop-color="#00E0FF"/></linearGradient><path d="M16.5208 0L0 16L16.5208 32L18.3178 30.2597L4.86475 17.2308H61V14.7692H4.86475L18.3178 1.74031L16.5208 0Z"/></svg></button>',
  });
});
