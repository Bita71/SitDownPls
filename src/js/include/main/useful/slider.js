const swiperUseful = new Swiper(".swiper-useful", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next-useful",
    prevEl: ".swiper-button-prev-useful",
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
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,

    },
  },
});
