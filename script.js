let boom = "./assets/boom.wav";
let clap = "./assets/clap.wav";
let hihat = "./assets/hihat.wav";
let kick = "./assets/kick.wav";
let openhat = "./assets/openhat.wav";
let ride = "./assets/ride.wav";
let snare = "./assets/snare.wav";
let tink = "./assets/tink.wav";
let tom = "./assets/tom.wav";

let button1 = document.querySelector(".boom");
let button2 = document.querySelector(".clap");
let button3 = document.querySelector(".hihat");
let button4 = document.querySelector(".kick");
let button5 = document.querySelector(".openhat");
let button6 = document.querySelector(".ride");
let button7 = document.querySelector(".snare");
let button8 = document.querySelector(".tink");
let button9 = document.querySelector(".tom");

let keys = document.querySelectorAll(".btn");

document.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      playSound(boom);
      addAnimation(0);
      break;
    case "s":
      playSound(clap);
      addAnimation(1);
      break;
    case "d":
      playSound(hihat);
      addAnimation(2);
      break;
    case "f":
      playSound(kick);
      addAnimation(3);
      break;
    case "g":
      playSound(openhat);
      addAnimation(4);
      break;
    case "h":
      playSound(ride);
      addAnimation(5);
      break;
    case "j":
      playSound(snare);
      addAnimation(6);
      break;
    case "k":
      playSound(tink);
      addAnimation(7);
      break;
    case "l":
      playSound(tom);
      addAnimation(8);
      break;
    default:
      break;
  }
});

function playSound(soundPath) {
  var audio = new Audio(soundPath);
  audio.play();
}

function addAnimation(index) {
  keys[index].classList.add("active");

  setTimeout(function () {
    keys[index].classList.remove("active");
  }, 200);
}
