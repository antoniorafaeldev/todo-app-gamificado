import { toggleTheme } from "./theme.js";
import { createTask } from "./createTask.js";
import { deleteTask } from "./deleteTask.js";
import { checkTask } from "./checkTask.js";
import { addXp, removeXp, updateLevelInformation } from "./levelManager.js";
import { initializeStats } from "./loadStats.js";
import { editUsername } from "./editUsername.js";
import { getTasks, addTaskToStorage, removeTaskFromStorage, updateTaskStateInStorage } from "./taskStorage.js";

const themeButton = document.getElementById("toggle-theme-btn");
const createTaskButton = document.getElementById("create-task-button");
const taskInput = document.getElementById("task-creation-input");
const taskList = document.getElementById("task-list");
const editUsernameButton = document.getElementById("edit-username-btn");

document.addEventListener("DOMContentLoaded", () => {
  initializeStats();


  const tasks = getTasks();
  tasks.forEach((task) => {
    const element = createTask(task.title);
    const checkbox = element.querySelector(".task-checkbox__input");
    if (task.completed) {
      checkbox.checked = true;
      element.classList.add("completed");
    }
  });
});

themeButton.addEventListener("click", toggleTheme);
editUsernameButton.addEventListener("click", editUsername);

createTaskButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (taskInput.value.trim() === "") return;

  createTask(taskInput.value);
  addTaskToStorage(taskInput.value, false);

  taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  const btn = event.target.closest(".trash-icon");
  const taskItem = event.target.closest(".task");
  if (!btn || !taskList.contains(btn)) return;

  const title = taskItem.querySelector(".task-title")?.textContent ?? "";
  const wasCompleted = taskItem.classList.contains("completed");

  deleteTask(btn);

  removeTaskFromStorage(title, wasCompleted);

  if (!wasCompleted) {
    removeXp(10);
    updateLevelInformation();
  }
});

taskList.addEventListener("change", (event) => {
  const checkbox = event.target.closest(".task-checkbox__input");
  if (!checkbox || !taskList.contains(checkbox)) return;

  checkTask(checkbox);

  const taskItem = checkbox.closest(".task");
  const title = taskItem.querySelector(".task-title")?.textContent ?? "";
  const isCompleted = taskItem.classList.contains("completed");
  updateTaskStateInStorage(title, isCompleted);
  
  if (checkbox.checked) {
    addXp(20);
    updateLevelInformation();
  } else {
    removeXp(20);
    updateLevelInformation();
  }
});

taskList.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const checkbox = event.target.closest(".task-checkbox__input");
    if (!checkbox || !taskList.contains(checkbox)) return;

    checkTask(checkbox);

    const taskItem = checkbox.closest(".task");
    const title = taskItem.querySelector(".task-title")?.textContent ?? "";
    const isCompleted = taskItem.classList.contains("completed");
    updateTaskStateInStorage(title, isCompleted);

    if (checkbox.checked) {
      checkbox.checked = false;
      addXp(20);
      updateLevelInformation();
    } else {
      checkbox.checked = true;
      removeXp(20);
      updateLevelInformation();
    }
  }
});
