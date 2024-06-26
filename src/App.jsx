import * as React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

const App = () => {
  const [newTodo, setNewTodo] = React.useState("");

  const onAddTodo = (todoTitle) => {
    setNewTodo(todoTitle);
  };

  const todoList = [
    {
      title: " Drink water",
      id: 1,
    },
    {
      title: " Eat healthy food",
      id: 2,
    },
    {
      title: " Physical activity",
      id: 3,
    },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={onAddTodo} /> {/* add form refactored*/}
      <p>New Todo: {newTodo}</p>
      <hr />
      <TodoList list={todoList} title={"Healthy habits"} />{" "}
      {/*todo list refactored */}
    </div>
  );
};

export default App;

/* <Search /> */
// const Search = () => {
//   const handleChange = (event) => {
//     //synthetic event
//     console.log(event);
//     //value of target (here: input HTML element)
//     console.log(event.target.value);
//   };

//   const handleMouseOver = (event) {
//     console.log(event);
//   }

//   return (
//     <div>
//       <label htmlFor="search">Search:</label>
//       <input id="search" type="text" onChange={handleChange} onMouseOver={handleMouseOver} />
//     </div>
//   );
// };
