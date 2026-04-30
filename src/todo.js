import { format, compareAsc } from "date-fns";

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
        sortProjectTodos(All);
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
        sortProjectTodos(project);
}

export function getTodos() {
        return todos;
}

export const deleteTodo = function(id) {
        getTodos().forEach(project => {
                project.todos = project.todos.filter(todo => todo.id !== id);
        });
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
        sortProjectTodos(getTodos()[0]);
}

export function deleteProject(project) {
        project.todos.forEach(todo => {
                deleteTodo(todo.id);
        });

        const todos = getTodos()
        const index = todos.findIndex(el => el === project);
        todos.splice(index, 1);

        console.log(getTodos());
}
 
function sortProjectTodos(project) {
    project.todos.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
}

 