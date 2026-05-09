export function checkTask(checkbox) {
  const taskItem = checkbox.closest(".task");
  taskItem.classList.toggle("completed");
}
