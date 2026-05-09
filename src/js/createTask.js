export function createTask(title) {
  const html = document.documentElement;
  const taskList = document.getElementById("task-list");
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  const taskHeader = createTaskHeader();
  const checkbox = createCheckbox();
  const checkboxBox = createCheckboxBox();
  const taskTitle = createTaskTitle(title);
  const trashIcon = createTrashIcon();
  const trashIconImg = createTrashIconImg();

  taskHeader.appendChild(checkbox);
  taskHeader.appendChild(checkboxBox);
  taskHeader.appendChild(taskTitle);

  trashIcon.appendChild(trashIconImg);

  taskItem.appendChild(taskHeader);
  taskItem.appendChild(trashIcon);
  taskList.appendChild(taskItem);

  return taskItem;
}

function createTaskHeader() {
  const taskHeader = document.createElement("label");
  taskHeader.classList.add("task-header");

  return taskHeader;
}

function createCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "task-markoff";
  checkbox.classList.add("task-checkbox__input");

  return checkbox;
}

function createCheckboxBox() {
  const checkboxBox = document.createElement("span");
  checkboxBox.classList.add("task-checkbox__box");
  checkboxBox.setAttribute("aria-hidden", "true");

  return checkboxBox;
}

function createTaskTitle(title) {
  const taskTitle = document.createElement("span");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = title;

  return taskTitle;
}

function createTrashIcon() {
  const trashIcon = document.createElement("button");
  trashIcon.classList.add("trash-icon");

  return trashIcon;
}

function createTrashIconImg() {
  const html = document.documentElement;

  const trashIconImg = document.createElement("img");
  trashIconImg.src = html.classList.contains("light")
    ? "./assets/img/trash-light.svg"
    : "./assets/img/trash-dark.svg";

  trashIconImg.alt = "Trash Icon | Delete Task";
  trashIconImg.classList.add("trash-icon-img");

  return trashIconImg;
}
