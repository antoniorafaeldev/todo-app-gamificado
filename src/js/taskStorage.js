export function getTasks() {
  const rawArray = localStorage.getItem("tasks");
  try {
    return rawArray ? JSON.parse(rawArray) : [];
  } catch (error) {
    console.error("Failed to parse tasks from localStorage", error);
    return [];
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks to localStorage", error);
  }
}


export function addTaskToStorage(title, completed = false) {
  const tasks = getTasks();
  tasks.push({ title, completed });
  saveTasks(tasks);
}


export function removeTaskFromStorage(title, completed) {
  const tasks = getTasks();
  const index = tasks.findIndex(
    (task) => task.title === title && task.completed === completed,
  );
  if (index !== -1) {
    tasks.splice(index, 1);
    saveTasks(tasks);
  }
}

export function updateTaskStateInStorage(title, completed) {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.title === title);
  if (index !== -1) {
    tasks[index].completed = completed;
    saveTasks(tasks);
  }
}
