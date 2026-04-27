const todos = [];
const project = createProject('All');

export function createTodo(title, description, dueDate, priority) {
        const todo = {
                id: crypto.randomUUID(),
                title,
                description,
                dueDate,
                priority,
                check: false
        }
        project.todos.push(todo);
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

export function pushTodo(todo, id){
        todos.forEach(project => {
                if(project.id.includes(id)) {
                        project.todos.push(todo);
                }
        })
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




 