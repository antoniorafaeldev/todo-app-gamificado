/*
Objetivo: criar uma função que marca uma tarefa como concluída.

Ela apenas precisa alternar a classe "completed" no elemento da tarefa, para que o estilo seja atualizado.
*/

export function checkTask(checkbox) {
    const taskItem = checkbox.closest(".task");
    taskItem.classList.toggle("completed");
}