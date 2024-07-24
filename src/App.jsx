import React from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import useSemiPersistentState from "./assets/hooks/useSemiPersistentState.jsx";

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList", []);

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

  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <hr />
      <TodoList list={todoList} title={"Healthy habits"} />
    </>
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
