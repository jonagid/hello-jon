const topicList = document.getElementById("topicList");
const newTopicInput = document.getElementById("newTopicInput");
const addTopicButton = document.getElementById("addTopicButton");

const showAllButton = document.getElementById("showAllButton");
const showActiveButton = document.getElementById("showActiveButton");
const showCompletedButton = document.getElementById("showCompletedButton");

const progressText = document.getElementById("progressText");
const progressSummary = document.getElementById("progressSummary");
const progressPercent = document.getElementById("progressPercent");
const progressMessage = document.getElementById("progressMessage");

const savedTopics = JSON.parse(localStorage.getItem("topics"));

let topics = savedTopics || [
  { name: "HTML", completed: false },
  { name: "CSS", completed: false },
  { name: "JavaScript", completed: false },
];

topics = topics.map(function (topic) {
  if (typeof topic === "string") {
    return {
      name: topic,
      completed: false,
    };
  }

  return topic;
});

saveTopics();

let currentFilter = "all";

function saveTopics() {
  localStorage.setItem("topics", JSON.stringify(topics));
}

function updateProgress() {
  const completedCount = topics.filter(function (topic) {
    return topic.completed;
  }).length;

  const totalCount = topics.length;

  let percentComplete = 0;

  if (totalCount > 0) {
    percentComplete = Math.round((completedCount / totalCount) * 100);
  }

  progressText.textContent = `Topics completed: ${completedCount}`;

  progressSummary.textContent = `Completed: ${completedCount} of ${totalCount} topics`;

  progressPercent.textContent = `Progress: ${percentComplete}%`;

  if (completedCount === 0) {
    progressMessage.textContent = "Start by completing one topic.";
  } else if (percentComplete < 50) {
    progressMessage.textContent = "Good start. Keep going.";
  } else if (percentComplete < 100) {
    progressMessage.textContent = "Nice progress. You are building momentum.";
  } else {
    progressMessage.textContent = "Great work. All topics completed.";
  }
}

function renderTopics() {
  topicList.innerHTML = "";

  const visibleTopics = topics.filter(function (topic) {
  if (currentFilter === "active") {
    return !topic.completed;
  }

  if (currentFilter === "completed") {
    return topic.completed;
  }

  return true;
});

visibleTopics.forEach(function (topic) {
  const index = topics.indexOf(topic);
    const listItem = document.createElement("li");

    const completedCheckbox = document.createElement("input");
    completedCheckbox.type = "checkbox";
    completedCheckbox.checked = topic.completed;

    const topicText = document.createElement("span");
    topicText.textContent = topic.name;

    if (topic.completed) {
      topicText.classList.add("completed-topic");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    completedCheckbox.addEventListener("change", function () {
      topic.completed = completedCheckbox.checked;

      saveTopics();

      showAllButton.addEventListener("click", function () {
  currentFilter = "all";

  renderTopics();
});

showActiveButton.addEventListener("click", function () {
  currentFilter = "active";

  renderTopics();
});

showCompletedButton.addEventListener("click", function () {
  currentFilter = "completed";

  renderTopics();
});
      
      renderTopics();
    });

    deleteButton.addEventListener("click", function () {
      topics.splice(index, 1);

      saveTopics();

      renderTopics();
    });

    listItem.appendChild(completedCheckbox);
    listItem.appendChild(topicText);
    listItem.appendChild(deleteButton);

    topicList.appendChild(listItem);
  });

  updateProgress();
}

addTopicButton.addEventListener("click", function () {
  const newTopic = newTopicInput.value.trim();

  if (newTopic === "") {
    return;
  }

  topics.push({
    name: newTopic,
    completed: false,
  });

  saveTopics();

  newTopicInput.value = "";

  renderTopics();
});

renderTopics();