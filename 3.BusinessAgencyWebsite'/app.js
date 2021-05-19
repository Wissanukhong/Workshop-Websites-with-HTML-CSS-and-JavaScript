// toggle the menu
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('change');
  navbar.classList.toggle('change');
});

// control the video
const video = document.querySelector('.video');
const btn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

// function play and pause
const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = 'far fa-pause-circle';
  } else {
    video.pause();
    btn.className = 'far fa-play-circle';
  }
};

// call the function
btn.addEventListener('click', () => {
  playPause();
});

// video time update
video.addEventListener('timeupdate', () => {
  // console.log(video.currentTime, video.duration);
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;

  // Change the icon when the video end
  if (video.ended) {
    btn.className = 'far fa-play-circle';
  }
});

// swiper
let swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
