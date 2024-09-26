import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel.jsx";
import style from "./OneTodoListItem.module.css";


const AddTodoForm = ({ onAddTodo, inputRef }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      // id: data.id,
    };

    onAddTodo(newTodo);
    setTodoTitle("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
        className={style.title}
      >
        Title
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
};

AddTodoForm.propTypes = {
onAddTodo: PropTypes.func.isRequired,
inputRef: PropTypes.object
};

export default AddTodoForm;
