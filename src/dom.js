import { createTodo, getTodos, createProject, pushTodo, updateTodo, deleteTodo, deleteProject } from './todo.js';
import{ format, compareASC } from "date-fns";

let currentProject = getTodos()[0];

function createModal(todoDom) {
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
    // descriptionInput.required = true;

    const dueDateInput = document.createElement('input');
    dueDateInput.id = "todo-date";
    dueDateInput.type = "date";
    dueDateInput.required = true;
    dueDateInput.valueAsDate = new Date();

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

    if(todoDom) {
        titleInput.value = todoDom.querySelector('.title').textContent;
        descriptionInput.value = todoDom.querySelector('.description').textContent;
        dueDateInput.value = todoDom.querySelector('.dueDate').textContent;
        priorityInput.value = todoDom.querySelector('.priority').textContent;
    }

    cancelBtn.addEventListener('click', () => {
        modal.close();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (todoDom) {
            updateTodo(
                todoDom.dataset.id, 
                titleInput.value,
                descriptionInput.value,
                dueDateInput.value,
                priorityInput.value
            );
        } else {
            const todo = createTodo(
                titleInput.value,
                descriptionInput.value,
                dueDateInput.value,
                priorityInput.value
            );
            if (currentProject.id !== getTodos()[0].id) 
                pushTodo(todo, currentProject);
            buildTodo(todo);
        }
        renderTodos();

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
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');
    todoContainer.dataset.id = todo.id;
    todoContainer.addEventListener('click', function() {
        createModal(todoContainer);
    });

    const todoInfo = document.createElement('div');
    todoInfo.classList.add('todo-info');

    const checkboxContainer = document.createElement('div');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    checkBox.addEventListener('click', function(e) {
    e.stopPropagation();
    deleteTodo(todo.id);
    renderTodos();
    });
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
    priority.dataset.priority = todo.priority;

    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    dueDate.textContent = format(todo.dueDate, "dd/MM/yyyy");

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');

    const i = document.createElement('i');
    i.classList.add('fa', 'fa-trash');
    deleteBtn.append(i);

    todoProps.append(priority, dueDate);

    todoContainer.append(todoInfo, todoProps, deleteBtn);
    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        deleteTodo(todo.id);
        renderTodos();
    });
    return todoContainer;
}

export function initApp() {
    renderProjects();
    renderTodos();

    const addTodoBtn = document.querySelector('.add-btn');
        addTodoBtn.addEventListener('click', (e) => {
            createModal();
    });

    const addProjectBtn = document.querySelector('.add-project');
    addProjectBtn.addEventListener('click', createProjectForm);
}

function renderProjects() {
    const projects = getTodos();
    const projectsList = document.querySelector('.projects-list');
    
    projectsList.innerHTML = '';

    projects.forEach(project => {
        const li = document.createElement('li');
        li.dataset.id = project.id;
        li.textContent = project.title;
        li.addEventListener('click', () => {
            currentProject = project;
            renderTodos(); 
        });

        if(project !== getTodos()[0]) {
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
    
            const i = document.createElement('i');
            i.classList.add('fa', 'fa-trash');
            deleteBtn.append(i);
    
            deleteBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                deleteProject(project);
                currentProject = getTodos()[0];
                renderProjects();
                renderTodos();
            });
            li.append(deleteBtn);
        }

        projectsList.append(li);
    });
}

function renderTodos() {
    document.querySelector('.current-project').textContent = currentProject.title;
    const todos = document.querySelector('.todos');
    todos.textContent = '';
    if (currentProject.todos.length) {
        currentProject.todos.forEach(todo => {
           const todoDiv = buildTodo(todo);
           todos.append(todoDiv);
        })
        return;
    }
    todos.textContent = "You don't have any projects yet";
}

function createProjectForm() {
    if (document.querySelector('.add-project-form')) return;
    const formContainer = document.querySelector('.form-container');

    const form = document.createElement('form');
    form.classList.add('add-project-form');
    form.style.display = 'block';

    const input = document.createElement('input');
    input.classList.add('add-project-input');
    input.type = 'text';
    input.required = true;
    input.placeholder = 'Project name...';
    
    const btn = document.createElement('button');
    btn.classList.add('check-form')
    btn.type = 'submit';
    
    const i = document.createElement('i');
    i.classList.add('fa', 'fa-check');
    i.ariaHidden = true;
    
    btn.append(i);
    form.append(input, btn);
    formContainer.append(form);

    input.focus()

    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape') {
            input.value = '';
            form.remove();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        currentProject = createProject(input.value);
        form.remove();
        renderTodos();
        renderProjects();
    });
    input.value = '';
}
