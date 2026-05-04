import "./style.css";
import '@fortawesome/fontawesome-free/js/all';
import { createTodo, createProject, pushTodo, getTodos, deleteTodo } from './todo.js'
import { createModal, initApp, buildTodo, renderProjects} from "./dom.js";
import{ format, compareAsc } from "date-fns";
initApp();

// initApp