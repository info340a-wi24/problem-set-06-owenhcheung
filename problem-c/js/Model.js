"use strict";

import initialTasks from './task-data.js';

let currentTaskList = initialTasks.map((task, index) => ({ ...task, id: index + 1 }));

function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === "incomplete");
}

function addTask(description) {
    const lastId = currentTaskList.length > 0 ? currentTaskList[currentTaskList.length - 1].id : 0;
    const newTask = {
        id: lastId + 1,
        description,
        status: "incomplete"
    };
    currentTaskList = [...currentTaskList, newTask];
}

function markComplete(taskId) {
    currentTaskList = currentTaskList.map(task => {
        if (task.id === taskId) {
            return { ...task, status: "complete" };
        }
        return task;
    });
}

export { getIncompleteTasks, addTask, markComplete };