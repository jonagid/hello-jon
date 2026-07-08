const topicList = document.getElementById("topicList");
const newTopicInput = document.getElementById("newTopicInput");
const addTopicButton = document.getElementById("addTopicButton");

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

function saveTopics() {
  localStorage.setItem("topics", JSON.stringify(topics));
}

function renderTopics() {
  topicList.innerHTML = "";

  topics.forEach(function (topic, index) {
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