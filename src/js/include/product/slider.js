const swiperSimilar = new Swiper(".swiper-similar", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 16,

  navigation: {
    nextEl: ".swiper-button-next-similar",
    prevEl: ".swiper-button-prev-similar",
  },

  breakpoints: {
    475: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
    1005: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },

    1355: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 32,
    },
  },
});
