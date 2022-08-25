const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 4,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // direction: 'vertical',
  // slidesPerView: 2,
  // spaceBetween: 30,
  // slidesPerGroup: 2,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
