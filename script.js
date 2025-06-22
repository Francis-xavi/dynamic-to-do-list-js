document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Define the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create <li> and remove button
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove logic
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append and reset
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});