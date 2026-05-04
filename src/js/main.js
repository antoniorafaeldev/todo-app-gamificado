import { toggleTheme } from "./theme.js";
import { createTask } from "./createTask.js";
import { deleteTask } from "./deleteTask.js";
import { checkTask } from "./checkTask.js";
import { addXp, removeXp, updateLevelInformation } from "./levelManager.js";
import { loadLevelInformation } from "./loadStats.js";

const themeButton = document.getElementById("toggle-theme-btn");
const createTaskButton = document.getElementById("create-task-button");
const taskInput = document.getElementById("task-creation-input");
const taskList = document.getElementById("task-list");
    
loadLevelInformation();

themeButton.addEventListener("click", toggleTheme);

createTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  createTask(taskInput.value);
  taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  const btn = event.target.closest(".trash-icon");
  const taskItem = event.target.closest(".task");
  if (!btn || !taskList.contains(btn)) return;

  deleteTask(btn);

  if (!taskItem.classList.contains("completed")) {
    removeXp(10);
    updateLevelInformation();
  }
});

taskList.addEventListener("change", (event) => {
  const checkbox = event.target.closest(".task-checkbox__input");
  if (!checkbox || !taskList.contains(checkbox)) return;

  checkTask(checkbox);
  if (checkbox.checked) {
    addXp(20);
    updateLevelInformation();
  } else {
    removeXp(20);
    updateLevelInformation();
  }
});
