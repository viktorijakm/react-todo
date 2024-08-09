import React, {useState} from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo , inputRef}) => {
  const [todoTitle, setTodoTitle] = useState("");

  //const handleAddTodo = (event) => {
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

    const handleAddTodo = (event) => {
    event.preventDefault();
    // const todoTitle = event.target.elements.todoTitle.value;
    // onAddTodo(todoTitle);
    // event.target.reset();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    onAddTodo(newTodo);
    setTodoTitle("");
  };

  return(
  <form onSubmit={handleAddTodo}>
    <InputWithLabel
    id="todoTitle" 
    value={todoTitle}
    onChange={handleTitleChange}
    ref={inputRef}
      >
        Title
        </InputWithLabel>
    <button type="submit">Add</button>
  </form>
  );
};

export default AddTodoForm;
