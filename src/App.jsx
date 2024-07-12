import React, { useState } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  //  React.useState([
  //   {
  //     title: " Drink water",
  //     id: 1,
  //   },
  //   {
  //     title: " Eat healthy food",
  //     id: 2,
  //   },
  //   {
  //     title: " Physical activity",
  //     id: 3,
  //   },
  // ]);

  /* declare new function and use spread operator*/
  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* add form refactored*, after update todoList, then prop value change to assTodo */}
      <AddTodoForm onAddTodo={addTodo} />
      {/*remove:  <p>New Todo: {newTodo}</p>*/}
      <hr />
      {/*todo list refactored */}
      <TodoList list={todoList} title={"Healthy habits"} />{" "}
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
