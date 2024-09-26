import * as React from "react";
import TodoListItem from "./TodoListItem.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faList } from '@fortawesome/free-solid-svg-icons';
 import PropTypes from "prop-types";


const TodoList = ({ list, title, onRemoveTodo, onUpdateTodo }) => {
  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faList} />   {title}
        </h2>
      <ul>
        {list.map((item) => (
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

TodoList.propTypes = {
  list: PropTypes.arrayOf(               // list should be an array of objects
    PropTypes.shape({
      id: PropTypes.string.isRequired,   // each item - an id (number)
      title: PropTypes.string.isRequired //  a title (string)
    })
  ).isRequired,
  title: PropTypes.string.isRequired,    // title should be a string
  onRemoveTodo: PropTypes.func.isRequired, // onRemoveTodo function
  onUpdateTodo: PropTypes.func.isRequired // onUpdateTodo  function
};

export default TodoList;

