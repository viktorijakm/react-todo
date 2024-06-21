import * as React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

const App = () => (
  <div>
    <h1>Todo List</h1>
    {/* <Search /> */}
    <AddTodoForm /> {/* add form refactored*/}
    <hr />
    <TodoList /> {/*todo list refactored */}
  </div>
);

// const Search = () => (
//   <div>
//     <label htmlFor="search">Search:</label>
//     <input id="search" type="text" />
//   </div>
// ); for later

export default App;
