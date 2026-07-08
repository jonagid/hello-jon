const topicList = document.getElementById("topicList");
const newTopicInput = document.getElementById("newTopicInput");
const addTopicButton = document.getElementById("addTopicButton");

const savedTopics = JSON.parse(localStorage.getItem("topics"));

let topics = savedTopics || ["HTML", "CSS", "JavaScript"];

function saveTopics() {
  localStorage.setItem("topics", JSON.stringify(topics));
}

function renderTopics() {
  topicList.innerHTML = "";

  topics.forEach(function (topic, index) {
    const listItem = document.createElement("li");

    const topicText = document.createElement("span");
    topicText.textContent = topic;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      topics.splice(index, 1);

      saveTopics();

      renderTopics();
    });

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

  topics.push(newTopic);

  saveTopics();

  newTopicInput.value = "";

  renderTopics();
});

renderTopics();