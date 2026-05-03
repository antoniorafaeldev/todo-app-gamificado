import { toggleTheme } from "./theme.js";
import { createTask } from "./createTask.js";

const themeButton = document.getElementById("toggle-theme-btn");

themeButton.addEventListener("click", toggleTheme);

const createTaskButton = document.getElementById("create-task-button");
const taskInput = document.getElementById("task-creation-input");

createTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    createTask(taskInput.value);
    taskInput.value = "";
});

  
