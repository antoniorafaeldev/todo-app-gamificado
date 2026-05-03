
export function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    const taskItem = button.closest(".task");

    taskList.removeChild(taskItem);
}