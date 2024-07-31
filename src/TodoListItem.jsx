import React from "react";

const TodoListItem = ({ todo, onRemove }) => {
  return (
    <li>
      {/* <span>{todo.id}</span>  */}
      <span>{todo.title}</span>
      <button type="button" onClick={() => onRemove(todo.id)}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
