const topicList = document.getElementById("topicList");
const newTopicInput = document.getElementById("newTopicInput");
const addTopicButton = document.getElementById("addTopicButton");

const topics = ["HTML", "CSS", "JavaScript"];

function renderTopics() {
  topicList.innerHTML = "";

  topics.forEach(function (topic) {
    const listItem = document.createElement("li");

    listItem.textContent = topic;

    topicList.appendChild(listItem);
  });
}

addTopicButton.addEventListener("click", function () {
  const newTopic = newTopicInput.value.trim();

  if (newTopic === "") {
    return;
  }

  topics.push(newTopic);

  newTopicInput.value = "";

  renderTopics();
});

renderTopics();