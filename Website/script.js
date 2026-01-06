const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const rotateBtn = document.getElementById("rotateBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const progress = document.getElementById("progress");

let rotation = 0;

/* Play / Pause */
playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

/* Rotate Video */
rotateBtn.addEventListener("click", () => {
    rotation = (rotation + 90) % 360;
    video.style.transform = `rotate(${rotation}deg)`;
});

/* Fullscreen */
fullscreenBtn.addEventListener("click", () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
});

/* Progress Bar */
video.addEventListener("timeupdate", () => {
    progress.value = (video.currentTime / video.duration) * 100;
});

progress.addEventListener("input", () => {
    video.currentTime = (progress.value / 100) * video.duration;
});
