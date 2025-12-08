import React from "react";
import Search from "./Search";
import "../styles/todolist.css";

function TodoList() {
  return (
    <div className="todo-container">
      <div className="todo-header">
        <Search />
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>SI</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>React JS</td>
            <td><input type="checkbox" /></td>
            <td><button className="delete-btn">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
