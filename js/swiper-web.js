document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.mySwiper1', {
    direction: 'horizontal', // or 'vertical'
    loop: true,
    centeredSlides: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Autoplay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },


  });

});
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".Swiper-promote", {
    slidesPerView: 3,  // จำนวนสไลด์ที่แสดงพร้อมกันบนหน้าจอใหญ่
    spaceBetween: 20,   // ระยะห่างระหว่างสไลด์
    loop: true,         // ให้สไลด์วนรอบ
    autoplay: {
      delay: 3000,      // ระยะเวลาในการสไลด์อัตโนมัติ (มิลลิวินาที)
      disableOnInteraction: false,  // การเลื่อนจะไม่หยุดหากมีการโต้ตอบ
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1, // แสดงเพียง 1 รูป
      },
      768: {
        slidesPerView: 3, // แสดง 3 
        spaceBetween: 20, // ระยะห่างระหว่างรูป
      },
    },
  });

});
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".section5-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    autoplay: {
      delay: 3000,      // ระยะเวลาในการสไลด์อัตโนมัติ (มิลลิวินาที)
      disableOnInteraction: false,  // การเลื่อนจะไม่หยุดหากมีการโต้ตอบ
    },

    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1560: {
        slidesPerView: 3
      }
    }
  });

});
document.addEventListener('DOMContentLoaded', function () {
  var init = false;
  var pricingCardSwiper;
  function swiperCard() {
    if (window.innerWidth <= 991) {
      if (!init) {
        init = true;
        pricingCardSwiper = new Swiper(".cardSlider", {
          slidesPerView: "1",
          spaceBetween: 0,
          grabCursor: true,
          keyboard: true,
          autoHeight: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            }
          },
        });
      }
    } else if (init) {
      pricingCardSwiper.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);


});
