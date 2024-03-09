"use strict";

import { getIncompleteTasks } from './Model.js';

function renderSingleTask(task, markCompleteCallback) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
  
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-sm', 'btn-warning');
    button.innerHTML = '<span class="material-icons-outlined">done</span>';
    button.addEventListener('click', () => markCompleteCallback(task));
  
    listItem.appendChild(button);
    listItem.appendChild(document.createTextNode(' ' + task.description));

    return listItem;
}

function renderTaskList(markCompleteCallback) {
    const incompleteTasks = getIncompleteTasks();

    if (incompleteTasks.length === 0) {
        const message = document.createElement('div');
        message.textContent = "None!";
        return message;
    }

    const list = document.createElement('ul');
    list.classList.add('list-group', 'list-group-flush');

    incompleteTasks.forEach(task => {
        const listItem = renderSingleTask(task, markCompleteCallback);
        list.appendChild(listItem);
    });

    return list;
}

export { renderTaskList };