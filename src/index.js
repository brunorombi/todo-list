import "./style.css";
import { createTodo, createProject, pushTodo, getTodos, deleteTodo } from './todo.js'
import { createModal } from "./dom.js";

const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', (e) => {
    createModal();
});

console.log(getTodos());