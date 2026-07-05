const button = document.getElementById("messageButton");
const message = document.getElementById("message");

let clickCount = 0;

button.addEventListener("click", function () {
  clickCount = clickCount + 1;

  message.textContent = `You clicked the button ${clickCount} time(s).`;
});
const progressButton = document.getElementById("progressButton");
const progressText = document.getElementById("progressText");

let topicsCompleted = 0;

progressButton.addEventListener("click", function () {
  topicsCompleted = topicsCompleted + 1;

  progressText.textContent = `Topics completed: ${topicsCompleted}`;
});