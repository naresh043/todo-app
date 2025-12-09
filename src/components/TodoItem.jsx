import React from "react";

function TodoItem({ id, description, isCompleted, todos, setTodos }) {
    const handleDelete=(id)=>{
        // debugger
        const newTodos= todos.filter((todo)=>todo.id!==id)
        console.log("clicked",{setTodos});
       setTodos(newTodos)
    }
  return (
    <tr>
      <td>{id}</td>
      <td>{description}</td>
      <td>
        <input
          type="checkbox"
          checked={isCompleted}
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
