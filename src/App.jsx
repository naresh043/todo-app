import { useState } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  const[todos,setTodos]=useState([])

  return (
    <>
      <h1>Todo App</h1>
      <TodoAdd todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
