//Selectors
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();

    // To Do DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
};
