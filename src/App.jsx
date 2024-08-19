import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
//import useSemiPersistentState from "./hooks/useSemiPersistentState.jsx";

const App = () => {
  const initialTodoList =
    JSON.parse(localStorage.getItem("savedTodoList")) || []; 
  const [todoList, setTodoList] = useState([]); // initialize todolist state
  //using empty array
  //   () => {
  //   const savedTodoList = localStorage.getItem("savedTodoList");
  //   if (savedTodoList) {
  //     return JSON.parse(savedTodoList);
  //   } else {
  //     return initialTodoList;
  //   }
  // });
  const [isLoading, setIsLoading] = useState(true); //new state isLoading
  const inputRef = useRef(null); //ref for the input element

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { todoList: initialTodoList } });
      }, 2000);
    });

    myPromise
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //empty dep array runs only once after initial render

  useEffect(() => {
    // Checking if loading is complete before setting localStorage
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); // Dependency array includes todoList and isLoading

  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]); //add new todo
  };

  //define the removeTodo
  const removeTodo = (id) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
    inputRef.current.focus(); //focus on the input after removing todo
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
      {(() => {
        if (isLoading) {
          return <p>Loading...</p>;
        } else {
          return (
            <>
              <AddTodoForm onAddTodo={addTodo} inputRef={inputRef} /> <hr />
              <TodoList
                list={todoList}
                title={"Healthy habits"}
                onRemoveTodo={removeTodo}
              />
            </>
          );
        }
      }) ()}
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
