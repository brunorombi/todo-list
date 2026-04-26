export const createToDo = function(title, description, dueDate, priority) {
        return {
                id: crypto.randomUUID(),
                title,
                description,
                dueDate,
                priority
        }
        
}

export const createProject = function(title) {
        return {
                id: crypto.randomUUID(),
                title,
                todos: []
        }        
}

export const pushTodo = function(todo, project) {
        project.todos.push(todo);
}

export const printTodos = function(project) {
        console.log(project.todos);
}
 