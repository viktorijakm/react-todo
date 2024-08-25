import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
//import useSemiPersistentState from "./hooks/useSemiPersistentState.jsx";

const App = () => {
  const initialTodoList = []; // default empty list
  const [todoList, setTodoList] = useState([]); // initialize todolist state
  const [isLoading, setIsLoading] = useState(true); //new state isLoading
  const inputRef = useRef(null); //ref for the input element

   // fetchData function - fetch data from API
   const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`; // Construct the API URL

    const options = {
      method: "GET", // Specify the request method as GET
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`, // Include the API token in the headers
      },
    };

    try {
      const response = await fetch(url, options); // Fetch data from the API

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // Throw an error if the response status is not OK
      }

      const data = await response.json(); // Parse the response as JSON
      console.log(data); //log API response data to the console

      const todos = data.records.map((record) => ({
        id: record.id,
        title: record.fields.Title,
      })); // Process and extract the todo items

      console.log(todos);
      setTodoList(todos); // Update the todoList state with fetched todos
      setIsLoading(false);

    } catch (error) {
       console.log(error.message);
    }
  };

  // useEffect to run the fetchData function when the component first renders
  useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array - runs only once after initial render

  // useEffect to save the todoList to localStorage whenever it changes
  useEffect(() => {
    // Only save to localStorage if we're not loading
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); // Dependency array includes todoList and isLoading

  // Function to add a new todo to the list
  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]); //add new todo
    inputRef.current.focus(); //focus on the input after removing todo
  };

  // Function to remove a todo from the list
  const removeTodo = (id) => {
    // Update the todoList state, filtering out the todo with the given id
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  // The JSX that defines what the UI looks like
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
      })()}
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
