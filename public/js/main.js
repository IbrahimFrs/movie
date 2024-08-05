let swiper = new Swiper(".popular-content", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// show video
let play_btn = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let my_video = document.querySelector("#myvideo");
let close_btn = document.querySelector(".close-video");

play_btn.onclick = () => {
  video.classList.add("show-video");
  my_video.play();
};

close_btn.onclick = () => {
  video.classList.remove("show-video");
  my_video.pause();
};
