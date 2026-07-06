const progressButton = document.getElementById("progressButton");
const resetButton = document.getElementById("resetButton");
const progressText = document.getElementById("progressText");
const progressMessage = document.getElementById("progressMessage");

let topicsCompleted = 0;

function updateProgress() {
  progressText.textContent = `Topics completed: ${topicsCompleted}`;

  if (topicsCompleted === 0) {
    progressMessage.textContent = "Start by completing one topic.";
  } else if (topicsCompleted < 3) {
    progressMessage.textContent = "Good start. Keep going.";
  } else if (topicsCompleted < 5) {
    progressMessage.textContent = "Nice progress. You are building momentum.";
  } else {
    progressMessage.textContent = "Great work. You are developing consistency.";
  }
}

progressButton.addEventListener("click", function () {
  topicsCompleted = topicsCompleted + 1;

  updateProgress();
});

resetButton.addEventListener("click", function () {
  topicsCompleted = 0;

  updateProgress();
});