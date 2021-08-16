const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addTodo(event) {
	event.preventDefault();

	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// new list of to do
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	// done button
	const completeButton = document.createElement('button');
	completeButton.innerHTML = `<i class="fas fa-check-square"></i>`;
	completeButton.classList.add('complete-btn');
	todoDiv.appendChild(completeButton);
	// delete button
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
	deleteButton.classList.add('delete-btn');
	todoDiv.appendChild(deleteButton);
	// append to list
	todoList.appendChild(todoDiv);
	// clear input box after submit
	todoInput.value = '';
}
// on click delete or checked of todo
function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === 'delete-btn') {
		const todo = item.parentElement;

		todo.classList.add('fall');
		todo.addEventListener('transitionend', function () {
			todo.remove();
		});
	}

	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
		todo.style.textDecoration = 'line-through';
		todo.style.color = '#ccc';
	}
}

// filter function

function filterTodo(e) {
	const todos = todoList.childNodes;
	todos.forEach(function (todo) {
		switch (e.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case 'uncompleted':
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
					break;
				}
		}
	});
}
