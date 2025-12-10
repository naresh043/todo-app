import { useState } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { MoonIcon } from "lucide-react";
import { Sun } from "lucide-react";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Todo App</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? (
          <MoonIcon/>
        ) : (
           <Sun/>
        )}
      </button>
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
