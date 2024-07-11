import * as React from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  //function to handle title change
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  // Function to handle adding new todo
  const handleAddTodo = (event) => {
    event.preventDefault();
    //remove: const todoTitle = event.target.elements.todoTitle.value;

    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddTodo(newTodo); //Pass newTodo object
    //reset todoTitle sate to empty string  (event.target.reset();)
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        type="text"
        name="todoTitle"
        value={todoTitle} //controlled input
        onChange={handleTitleChange} //handle input changes
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
