// Function to handle task addition and removal for both lists
function setupToDoList(inputId, addBtnId, taskListId) {
    const addBtn = document.getElementById(addBtnId);
    const taskInput = document.getElementById(inputId);
    const taskList = document.getElementById(taskListId);

    // Add a new task
    addBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement('li');
            const taskTextNode = document.createElement('span');
            taskTextNode.textContent = taskText;

            // Create a container for buttons and append it below the task text
            const buttonsContainer = document.createElement('div');
            buttonsContainer.style.display = 'flex';
            buttonsContainer.style.gap = '10px';
            buttonsContainer.style.marginTop = '10px';

            // Create a "Done" button
            const doneBtn = document.createElement('button');
            doneBtn.textContent = 'Done';
            doneBtn.addEventListener('click', function() {
                // Toggle the task completion
                if (li.classList.contains('completed')) {
                    li.classList.remove('completed');
                    doneBtn.textContent = 'Done';
                } else {
                    li.classList.add('completed');
                    doneBtn.textContent = 'Undo';
                }
            });

            // Create a "Remove" button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', function() {
                taskList.removeChild(li); // Remove the task item from the list
            });

            // Append the buttons to the buttons container
            buttonsContainer.appendChild(doneBtn);
            buttonsContainer.appendChild(removeBtn);

            // Append the task text and buttons container to the task item
            li.appendChild(taskTextNode);
            li.appendChild(buttonsContainer);

            // Append the task item to the list
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = '';
        }
    });

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
}

// Setup both to-do lists
setupToDoList('taskInput', 'addBtn', 'taskList');  // Daily To-Do List
setupToDoList('weeklyTaskInput', 'weeklyAddBtn', 'weeklyTaskList');  // Weekly To-Do List
