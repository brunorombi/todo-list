import "./style.css";
import { createTodo, createProject, pushTodo, getTodos, deleteTodo } from './todo.js'
import { createModal, initApp, buildTodo, renderProjects } from "./dom.js";

initApp();

// initApp