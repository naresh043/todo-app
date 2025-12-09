import React, { useState } from "react";
import "../styles/todoadd.css";

function TodoAdd({ todos, setTodos }) {
  const [id,setId]=useState(1)
  const [error, setError] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    if (!inputValue.trim()) {
      setError("Enter valid Input");
      return;
    } 
    setTodos([...todos, {id:id,
      description:inputValue,isCompleted:false}]);
    e.target[0].value="";
    setId((pre)=>pre+1)
    setError("")
  };
  return (
    <form onSubmit={handleSubmit} className="todo-add-wrapper">
      <input className="inpt-field" type="text" placeholder="Enter task..." />
      <button className="add-btn">Add</button><br />
      {error && <p className="error-msg">{error}</p>}
    </form>
  );
}

export default TodoAdd;
