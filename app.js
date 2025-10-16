var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var car = document.getElementById("car");

var current = "red";
var carPosition = 0;
var challanShown = false;
var stopLine = 550;

function setLight(r, y, g) {
  red.style.opacity = r;
  yellow.style.opacity = y;
  green.style.opacity = g;
}

function signalChange() {
  setLight(1, 0.3, 0.3);
  current = "red";

  setTimeout(function() {
    setLight(0.3, 1, 0.3);
    current = "yellow";

    setTimeout(function() {
      setLight(0.3, 0.3, 1);
      current = "green";

      setTimeout(signalChange, 10000);

    }, 3000); 

  }, 7000); 
}

function moveCar() {
  if (current === "green") {
    carPosition = carPosition + 3;
  }

  if (current === "red" || current === "yellow") {
    carPosition = carPosition + 0;
  }

  if (current === "red" && carPosition > 550 && challanShown === false) {
    challanShown = true;
    alert("Traffic Violation! You crossed the red light. Challan issued!");
  }

  if (carPosition >= 1200) {  
    carPosition = -200;
    challanShown = false;
  }

  car.style.left = carPosition + "px";
}


  if (current === "green") {
    challanShown = false;
  }

setInterval(moveCar, 30);

signalChange();
