import { toggleTheme } from "./theme.js";
import { createTask } from "./createTask.js";
import { deleteTask } from "./deleteTask.js";

const themeButton = document.getElementById("toggle-theme-btn");

themeButton.addEventListener("click", toggleTheme);

const createTaskButton = document.getElementById("create-task-button");
const taskInput = document.getElementById("task-creation-input");
const taskList = document.getElementById("task-list");

createTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    createTask(taskInput.value);
    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
    const btn = event.target.closest(".trash-icon");
    if (!btn || !taskList.contains(btn)) return;
    deleteTask(btn);
});


