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
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 40,
    },
    520: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
    },
  }
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const txtAnim = document.querySelector('.home--content--text');

new Typewriter(txtAnim, {
  deleteSpeed: 40
})
.changeDelay(80)
.typeString('Moi c\'est John Doe,')
.pauseFor(300)
.typeString('<strong> Dev full-stack</strong>')
.deleteChars(14)
.start()
