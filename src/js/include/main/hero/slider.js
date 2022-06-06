const swiperHero = new Swiper(".swiper-hero", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination-hero",
    clickable: true,
  },
});

