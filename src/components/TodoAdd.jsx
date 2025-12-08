import React from "react";
import "../styles/todoadd.css";

function TodoAdd() {
  return (
    <div className="todo-add-wrapper">
      <input className="inpt-field" type="text" placeholder="Enter task..." />
      <button className="add-btn">Add</button>
    </div>
  );
}

export default TodoAdd;
