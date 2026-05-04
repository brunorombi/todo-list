import { format, compareAsc } from "date-fns";

const todos = JSON.parse(localStorage.getItem("projects")) || [];
if (!todos[0]) {
        todos[0] = createProject(`All`);
}

export function createTodo(title, description, dueDate, priority) {
        const todo = {
                id: crypto.randomUUID(),
                title,
                description,
                dueDate,
                priority,
                check: false
        }

        getTodos()[0].todos.push(todo);
        getTodos().forEach(project => sortProjectTodos(project));
        localStorage.setItem('projects', JSON.stringify(todos));
        return todo;
}     

export function createProject(title) {
        const project = {
                id: crypto.randomUUID(),
                title,
                todos: []
        }
        todos.push(project);
        localStorage.setItem('projects', JSON.stringify(todos));
        return project;    
}

export function pushTodo(todo, project){
        project.todos.push(todo);
        sortProjectTodos(project);
        localStorage.setItem('projects', JSON.stringify(todos));
}

export function getTodos() {
        return todos;
}

export const deleteTodo = function(id) {
        getTodos().forEach(project => {
                project.todos = project.todos.filter(todo => todo.id !== id);
        });
        localStorage.setItem('projects', JSON.stringify(todos));
}

export function updateTodo(id, title, description, dueDate, priority) {
        const index = getTodos()[0].todos.findIndex((todo) => todo.id === id);

        const todo = getTodos()[0].todos[index];
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;

        getTodos().forEach(project => sortProjectTodos(project));
        localStorage.setItem('projects', JSON.stringify(todos)); 
}

export function deleteProject(project) {
        project.todos.forEach(todo => {
                deleteTodo(todo.id);
        });

        const todos = getTodos()
        const index = todos.findIndex(el => el === project);
        todos.splice(index, 1);

        localStorage.setItem('projects', JSON.stringify(todos));
}
 
function sortProjectTodos(project) {
    project.todos.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
    localStorage.setItem('projects', JSON.stringify(todos));
}



 