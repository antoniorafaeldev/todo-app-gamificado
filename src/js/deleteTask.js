/*
Objetivo: Criar uma função que delete a tarefa quando clicar no botão

Ela deleterá o li mais próximo do botão, ou seja, o pai do pai do botão, já que o pai é o label e o pai do label é o li
*/

export function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    const taskItem = button.closest(".task");

    taskList.removeChild(taskItem);
}