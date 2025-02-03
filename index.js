var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var crash = new Audio("sounds/crash.mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerhtml = this.textContent;

    switch (buttonInnerhtml) {
      case "w":
        crash.play();
        break;

      case "a":
        kickBass.play();
        break;

      case "s":
        snare.play();
        break;

      case "d":
        tom1.play();
        break;
      case "j":
        tom2.play();
        break;
      case "k":
        tom3.play();
        break;
      case "l":
        tom4.play();
        break;
    }
  });
}

document.addEventListener("keydown", function (event) {
  const keyName = event.key;

  switch (keyName) {
    case "w":
      crash.play();
      break;
    case "a":
      kickBass.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom1.play();
      break;
      case "j":
        tom2.play();
        break;
      case "k":
        tom3.play();
        break;
      case "l":
        tom4.play();
        break;
  }
});
