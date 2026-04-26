import "./style.css";
import { createToDo, createProject, pushTodo, printTodos }from './todo.js'

const firstToDo = createToDo("Gym", "Leg-Day", "04/30/2026", "High");
const secondToDo = createToDo("Study", "Pair-Programming", "04/27/2026", "Low");
const defaultProject = createProject("default");
pushTodo(firstToDo, defaultProject);
pushTodo(secondToDo, defaultProject);
printTodos(defaultProject);