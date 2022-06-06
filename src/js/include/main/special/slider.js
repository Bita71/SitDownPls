const swiperSpecial = new Swiper(".swiper-special", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next-special",
    prevEl: ".swiper-button-prev-special",
  },

  breakpoints: {
    585: {
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
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerView: "auto",
      spaceBetween: 32,
    },
  },
});
