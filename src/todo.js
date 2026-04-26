const todos = [];
const project = createProject('Default');
todos.push(project);

export function createTodo(title, description, dueDate, priority) {
        const todo = {
                id: crypto.randomUUID(),
                title,
                description,
                dueDate,
                priority
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

export function printTodos() {
        console.log(todos);
}

export const deleteTodo = function(todo, project) {
        todos.forEach(el => {
                el.todos.forEach((element, index) => {
                        if(element === todo)
                        el.todos.splice(index, 1);
                });
        });
}




 