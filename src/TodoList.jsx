import * as React from "react";
import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({ list, title, onRemoveTodo, onUpdateTodo }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {list.map((item) => (
          //onRemoveTodo to TodoListItem
          <TodoListItem
            key={item.id}
            todo={item}
            onRemove={onRemoveTodo}
            onUpdate={onUpdateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
