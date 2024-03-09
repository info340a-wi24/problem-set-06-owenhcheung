"use strict";

import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskView();
}

function renderTaskView() {
    const tasksRoot = document.getElementById('tasks-root');
    tasksRoot.innerHTML = '';
    const taskList = renderTaskList(markCompleteCallback);
    tasksRoot.appendChild(taskList);
}

// Event listener for add task button
document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskDescription = taskInput.value.trim();

    if (taskDescription === '') {
        return; // do nothing if task description is empty
    }

    model.addTask(taskDescription);
    taskInput.value = ''; // Clear input field
    renderTaskView(); // Re-render the task list
});