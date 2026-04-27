import "./style.css";
import { createTodo, createProject, pushTodo, getTodos, deleteTodo } from './todo.js'

createTodo("Gym", "Leg-Day", "04/20/2026", "High");
const todo = createTodo("Study", "Pair-Programming", "04/27/2026", "Low");
const project = createProject('study');
const projectProgramming = createProject('programming');
pushTodo(todo, project.id);
pushTodo(todo, projectProgramming.id)
deleteTodo(todo.id)

console.log(getTodos());