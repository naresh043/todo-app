import React, { useState } from "react";
import Search from "./Search";
import "../styles/todolist.css";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  return (
    <div className="todo-container">
      <div className="todo-header">
 
        <Search setSearchText={setSearchText} />

        <div>
          <button
            className="ascending"
            onClick={() => setSortOrder("asc")}
          >
            Ascending
          </button>

          <button
            className="descending"
            onClick={() => setSortOrder("desc")}
          >
            Descending
          </button>
        </div>
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
          {sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              id={todo.id}
              description={todo.description}
              isCompleted={todo.isCompleted}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
