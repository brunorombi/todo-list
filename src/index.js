import "./style.css";
import '@fortawesome/fontawesome-free/js/all';
import { createTodo, createProject, pushTodo, getTodos, deleteTodo } from './todo.js'
import { createModal, initApp, buildTodo, renderProjects} from "./dom.js";
import{ format, compareASC } from "date-fns";

console.log(new Date().toLocaleDateString());

initApp();

// initApp