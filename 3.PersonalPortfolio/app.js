// toggle the menu
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menu.classList.toggle('change');
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
