// Prompt the user to enter their name
var name = prompt("Please enter your name:");

// Generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Update the thanks message with the entered name and change the colors
var thanksMessage = document.getElementById("thanks-message");
thanksMessage.textContent = "Thanks for paying tribute to Dr. APJ Abdul Kalam, " + name + "!";

// Change the colors of the thanks message
setInterval(function() {
  var color = getRandomColor();
  thanksMessage.style.color = color;
}, 1000);