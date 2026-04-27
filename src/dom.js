import { createTodo } from './todo.js';

export function createModal() {
    const modal = document.createElement('dialog');
    modal.id = "todo-modal";

    const form = document.createElement('form');
    form.id = "todo-form";
    form.method = "dialog";

    const titleInput = document.createElement('input');
    titleInput.id = "todo-title";
    titleInput.type = "text";
    titleInput.placeholder = "Title";
    titleInput.required = true;

    const descriptionInput = document.createElement('input');
    descriptionInput.id = "todo-description";
    descriptionInput.type = "text";
    descriptionInput.placeholder = "Description";
    descriptionInput.required = true;

    const dueDateInput = document.createElement('input');
    dueDateInput.id = "todo-date";
    dueDateInput.type = "date";
    dueDateInput.required = true;

    const priorityInput = document.createElement('select');
    priorityInput.id = "todo-priority";
    priorityInput.required = true;

    const high = document.createElement('option');
    high.value = "High";
    high.textContent = "High";

    const medium = document.createElement('option');
    medium.value = "Medium";
    medium.textContent = "Medium";

    const low = document.createElement('option');
    low.value = "Low";
    low.textContent = "Low";

    priorityInput.append(high, medium, low);

    const btnContainer = document.createElement('div');
    btnContainer.id = "modal-buttons";

    const submitBtn = document.createElement('button');
    submitBtn.id = "submit-btn";
    submitBtn.textContent = "Add";
    submitBtn.type = "submit";

    const cancelBtn = document.createElement('button');
    cancelBtn.id = "cancel-btn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.type = "button";

    cancelBtn.addEventListener('click', () => {
        modal.close();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const todo = createTodo(
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            priorityInput.value
        );
        
        buildTodo(todo);

        modal.close();
    });

    btnContainer.append(submitBtn, cancelBtn);

    form.append(
        titleInput,
        descriptionInput,
        dueDateInput,
        priorityInput,
        btnContainer
    );

    modal.appendChild(form);
    document.body.appendChild(modal);

    modal.showModal();
}

function buildTodo(todo) {
    const todosContainer = document.querySelector(".todos");
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');
    todoContainer.dataset.id = todo.id;

    const todoInfo = document.createElement('div');
    todoInfo.classList.add('todo-info');

    const checkboxContainer = document.createElement('div');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkboxContainer.appendChild(checkBox);

    const info = document.createElement('div');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = todo.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = todo.description;

    info.append(title, description);
    todoInfo.append(checkboxContainer, info);

    const todoProps = document.createElement('div');
    todoProps.classList.add('todo-props');

    const priority = document.createElement('p');
    priority.classList.add('priority');
    priority.textContent = todo.priority;

    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    dueDate.textContent = todo.dueDate;

    todoProps.append(priority, dueDate);

    todoContainer.append(todoInfo, todoProps);

    todosContainer.append(todoContainer);
}
