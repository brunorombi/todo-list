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
        todos.forEach(el => {
                el.todos.forEach((element, index) => {
                        if(element.id === id)
                        el.todos.splice(index, 1);
                });
        });
}




 