import "./style.css";
import { createTodo, createProject, pushTodo, printTodos }from './todo.js'

const firstToDo = createTodo("Gym", "Leg-Day", "04/30/2026", "High");
const secondToDo = createTodo("Study", "Pair-Programming", "04/27/2026", "Low");

printTodos();