const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const task = taskInput.value;

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
};