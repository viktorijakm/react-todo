import React, { useState } from "react";

const TodoListItem = ({ todo, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleUpdate = () => {
    onUpdate(todo.id, newTitle);
    setIsEditing(false); // Exit edit mode after updating
  };

  const handleCancel = () => {
    setIsEditing(false); // Exit editing mode without saving
  };

  // This function is called when the "Edit" button is clicked
  const handleEdit = () => {
    setIsEditing(true); // Enter editing mode
  };

  // This function is called when the "Remove" button is clicked
  const handleRemove = () => {
    onRemove(todo.id); // Remove the todo item
  };

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="button" onClick={handleUpdate}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <span>{todo.title}</span>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleRemove}>
          Remove
        </button>
      </li>
    );
  }
};

export default TodoListItem;
