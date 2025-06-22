document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }

  function removeTask(taskElement, taskText) {
    taskElement.remove();
    const tasks = getStoredTasks().filter(task => task !== taskText);
    saveTasks(tasks);
  }

  function addTask(taskText, save = true) {
    if (!taskText) {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => removeTask(li, taskText);

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      const tasks = getStoredTasks();
      tasks.push(taskText);
      saveTasks(tasks);
    }

    taskInput.value = "";
  }

  function loadTasks() {
    const storedTasks = getStoredTasks();
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  addButton.addEventListener("click", () => {
    addTask(taskInput.value.trim());
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(taskInput.value.trim());
    }
  });

  loadTasks();
});
