import React from "react";

const TodoListItem = ({ todo }) => (
    <li>
      <span>{todo.id}</span>
      <span>{todo.title}</span>
    </li>
  );

export default TodoListItem;
