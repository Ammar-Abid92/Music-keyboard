// Using keyboard
window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-note="${e.keyCode}"]`);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  });

// Using Click
const values = document.querySelectorAll(".key");
values.forEach((value) => {
  value.addEventListener("click", () => playNote(value));
});

function playNote(value) {
    const music = document.getElementById(value.dataset.note);
    if (!music) {
    return;
  }
  music.currentTime = 0;
  music.play();
  value.classList.add("playing");
}

// Animation work
function removetrans(e) {
  if (e.propertyName !== "transform") {
    return ;
  }
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removetrans));
