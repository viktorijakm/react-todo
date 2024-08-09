import React, { useRef } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import useSemiPersistentState from "./hooks/useSemiPersistentState.jsx";

const App = () => {

  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList", []);
  //ref for input element
  const inputRef = useRef(null);//ref for the input element

  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]);
  };

  //define the removeTodo
  const removeTodo = (id) => {
    setTodoList((prevList) => prevList.filter(todo => todo.id !== id));
    inputRef.current.focus();//focus on the input after removing todo
  };

  // const todoList = [
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
  // ];

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} inputRef={inputRef}/> {/*inputRef as prop */}
      <hr />
      {/* removeTodo as prop to TodoList */}
      <TodoList list={todoList} title={"Healthy habits"} onRemoveTodo={removeTodo}/>
    </>
  );
};

export default App;

 /* /* <Search /> */
//</> const Search = () => {
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
// }; */}
