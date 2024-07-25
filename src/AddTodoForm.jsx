import React, {useState} from "react";

const AddTodoForm = ({ onAddTodo }) => {
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
    <label htmlFor="todoTitle">Title</label>
    <input id="todoTitle" 
    type="text" 
    name="todoTitle"
    value={todoTitle}
    onChange={handleTitleChange}
    />
    <button type="submit">Add</button>
  </form>
  );
};

export default AddTodoForm;
