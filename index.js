// her bir button icin ilgili images clasöründe görsel olsun ve görsel ismiyle eşlesen ses çalsın
// images klasöründeki resimler sırasıyla ilgi button görsellerinin yanına eklensin
// images klasöründeki resimlerin isimleri sırasıyla ilgili button görsellerinin yanına eklensin
// images klasöründeki resimlerin isimleri sırasıyla ilgili button görsellerinin yanına eklensin
// images klasöründeki resimlerin isimleri sırasıyla ilgili button görsellerinin yanına eklensin

// Path: Drum Kit Starting Files\index.js
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//devam et
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
}

document.addEventListener("keydown", function (event) {
    if(event.key === "w"){
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    else if(event.key === "a"){
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    }
    else if(event.key === "s"){
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    else if(event.key === "d"){
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    else if(event.key === "j"){
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    }
    else if(event.key === "k"){
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    }
    else if(event.key === "l"){
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    }
}
);







