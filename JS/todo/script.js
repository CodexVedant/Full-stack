const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

render();

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  saveAndRender();
  taskInput.value = "";
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveAndRender();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

function render() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.className = task.done ? "completed" : "";
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <span class="delete" onclick="deleteTask(${index})">✖</span>
    `;

    taskList.appendChild(li);
  });
}
