import { createTodo, getTodos, createProject, pushTodo, updateTodo } from './todo.js';
let currentProject = getTodos()[0];

createProject('Study');

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
    return todoContainer;
}

//Corrigir
export function initApp() {
    renderProjects();
    renderTodos();

    const addTodoBtn = document.querySelector('.add-btn');
        addTodoBtn.addEventListener('click', (e) => {
            createModal();
    });
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

// export function updateTodoDom() {
//     const todosDom = document.querySelectorAll('.todo');
//         todosDom.forEach(todoDom, () => {
//             todoDom.addEventListener('click', function() {
                
//                 console.log('funcionando')
//             })
//         })
// }
