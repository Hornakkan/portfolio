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
  // loop: true,
  deleteSpeed: 40
})
.changeDelay(80)
.typeString('Moi c\'est Sébastien,<br />')
.pauseFor(300)
.typeString('<strong> Développeur Web</strong>')
.pauseFor(1000)
.deleteChars(4)
// .typeString('<span style="color: #1572b6ff; font-weight: 600;"> CSS</span>')
// .pauseFor(1000)
// .deleteChars(3)
.typeString('<span style="color: #cb6699ff; font-weight: 600;"> Sass</span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span style="color: #fd4f31ff; font-weight: 600;"> Laravel</span>')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #6181b6ff; font-weight: 600;"> php</span>')
.pauseFor(1000)
.deleteChars(3)
.typeString('<span style="color: #41b883ff; font-weight: 600;"> Vue</span>')
.pauseFor(1000)
.deleteChars(3)
// .typeString('<span style="color: #f0db4fff; font-weight: 600;"> Javascript</span> !')
.typeString('<span style="color: #cebd4f; font-weight: 600;"> Javascript</span>')
.start()
