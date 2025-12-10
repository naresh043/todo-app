import React from "react";
import "../styles/todoitem.css";
function TodoItem({ id, description, isCompleted, todos, setTodos }) {
  const handleDelete = (id) => {
    // debugger
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log("clicked", { setTodos });
    setTodos(newTodos);
  };
   const handleCheckbox = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <tr className={isCompleted ? "completed-item" : ""}>
      <td>{id}</td>
      <td>{description}</td>
      <td>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckbox(id)} 
          className={isCompleted ? "completed" : ""}
        />
      </td>
      <td>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
