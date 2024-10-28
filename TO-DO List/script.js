document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');

            checkbox.addEventListener('change', () => {
                li.classList.toggle('completed');
            });

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                taskList.removeChild(li);
            });

            li.appendChild(checkbox);
            li.appendChild(taskContent);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
