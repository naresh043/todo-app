import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoAdd from "./components/TodoAdd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is app components</h1>
      <TodoAdd/>
    </>
  );
}

export default App;
