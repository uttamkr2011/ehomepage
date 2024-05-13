var mobMenu = document.querySelector(".mob-toggle"); 
var closeMenu = document.querySelector(".close-menu-mob i");

/////////////////////////////////
// Mobile Menu

var tl = gsap.timeline();

mobMenu.addEventListener("click", function() {
  tl.to(".main-menu", {
    left: 0,
    duration: 0.7,
  });

  tl.from([".nav-items, .close-menu-mob"], {
    x: -320,
    duration: 0.7,
  });

  tl.from(".close-menu-mob i", {
    duration: 0.7,
    delay: 0.1,
    opacity: 0,
  });

  tl.from([".nav-link, .user-mob"], {
    x: 150,
    duration: 0.7,
    opacity: 0,
    stagger: 0.3,
  });

});

closeMenu.addEventListener("click", function() {
  tl.to(".main-menu", {
    left: "-100%",
    duration: 0.4,
  });
});

//////////////////////////////////
// content animation

if(window.innerWidth > 998){
  var deskTl = gsap.timeline();

  deskTl.from([".brand-name, .nav-link, .nav-icon .icon"], {
    y: -30,
    duration: 0.8,
    delay: 0.3,
    opacity: 0,
    stagger: 0.2
  })
}

//////////////////////////////////
// Hero Slider
var heroSwiper = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  initialSlide: 1,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

////////////////////////////////////////////
// New Arrival Product Slider

var arrivalSwiper = new Swiper(".new-p-swiper", {
  slidesPerView:'auto',
  initialSlide: 1,
  speed: 1000,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

////////////////////////////////////////////
// Stories Slider

var storieSwiper = new Swiper(".stories-swiper", {
  slidesPerView: 3,
  initialSlide: 1,
  spaceBetween: 15,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  roundLengths: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

