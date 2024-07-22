import * as React from "react";
import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({ list, title }) => {
  return(
  <div>
    <h2>{title}</h2>
    <ul>
      {list.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  </div>
   );
};

export default TodoList;
