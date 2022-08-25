const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  // direction: 'vertical',
  // slidesPerView: 2,
  // spaceBetween: 30,
  // slidesPerGroup: 2,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
