import React, {useState} from "react";

const AddTodoForm = ({ onAddTodo }) => {

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };


    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };


  );
};

export default AddTodoForm;
