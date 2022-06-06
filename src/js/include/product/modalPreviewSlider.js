const swiperPreview = new Swiper(".swiper-preview", {

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 78,

  navigation: {
    nextEl: ".swiper-button-next-preview",
    prevEl: ".swiper-button-prev-preview",
  },

  breakpoints: {
    475: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 78,
    },
    1005: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 78,

    },

    1355: {
      slidesPerGroup: 4,
      slidesPerView: "auto",
      spaceBetween: 78,
    },
  },
});
