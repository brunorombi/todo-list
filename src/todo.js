const todos = [];
const All = createProject('All');

export function createTodo(title, description, dueDate, priority) {
        const todo = {
                id: crypto.randomUUID(),
                title,
                description,
                dueDate,
                priority,
                check: false
        }
        All.todos.push(todo);
        return todo;
}     

export function createProject(title) {
        const project = {
                id: crypto.randomUUID(),
                title,
                todos: []
        }
        todos.push(project);
        return project;    
}

export function pushTodo(todo, project){
        project.todos.push(todo);
}

export function getTodos() {
        return todos;
}

export const deleteTodo = function(id) {
        const index = getTodos()[0].todos
                .findIndex((todo) => todo.id === id);
        getTodos()[0].todos.splice(index, 1);
}

export function updateTodo(id, title, description, dueDate, priority) {
        const index = getTodos()[0].todos
                .findIndex((todo) => todo.id === id);
        if (index >= 0) {
                const todo = getTodos()[0].todos[index];
                todo.title = title;
                todo.description = description;
                todo.dueDate = dueDate;
                todo.priority = priority;
        }
}
 


 