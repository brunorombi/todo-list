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

    const checkInput = document.createElement('input');
    checkInput.id = "todo-check";
    checkInput.type = 'checkbox';

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

        createTodo(
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            priorityInput.value
        );

        modal.close();
    });

    btnContainer.append(submitBtn, cancelBtn);

    form.append(
        titleInput,
        descriptionInput,
        dueDateInput,
        priorityInput,
        checkInput,
        btnContainer
    );

    modal.appendChild(form);
    document.body.appendChild(modal);

    modal.showModal();
}
