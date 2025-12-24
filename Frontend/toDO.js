class Task {
    constructor(description) {
        this.description = description;
        this.isComplete = false;
    }
}

let tasks = [];
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function rTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        li.dataset.index = index;
        if (task.isComplete) {
            li.classList.add('completed');
        }

        const taskText = document.createElement('span');
        taskText.textContent = task.description;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    const description = taskInput.value.trim();

    if (description) {
        const newTask = new Task(description);
        tasks.push(newTask);
        
        rTasks();
        
        taskInput.value = '';
    }
});


taskList.addEventListener('click', (event) => {
    const clickedElement = event.target;
    
    const taskItem = clickedElement.closest('.task-item');
    if (!taskItem) return;

    const index = taskItem.dataset.index;

    if (clickedElement.classList.contains('delete-btn')) {
        tasks.splice(index, 1);
    } 
    else {
        tasks[index].isComplete = !tasks[index].isComplete;
    }

    rTasks();
});

rTasks();