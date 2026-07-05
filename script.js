const button = document.getElementById("messageButton");
const message = document.getElementById("message");

let clickCount = 0;

button.addEventListener("click", function () {
  clickCount = clickCount + 1;

  message.textContent = `You clicked the button ${clickCount} time(s).`;
});