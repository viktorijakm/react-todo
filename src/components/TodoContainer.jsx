import { useCallback, useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const inputRef = useRef(null);

  // Beginning of GET - Fetch data from API
  const fetchData = useCallback(async () => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
     }/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`; // sort by view order - Adding the ?view=Grid%20view

    // sort by Airtable field - Adding the sort[0][field] and sort[0][direction]
   //   import.meta.env.VITE_AIRTABLE_BASE_ID }/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`; 

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      // sort with Java Script 
      data.records.sort((objectA, objectB) => {
        const titleA = objectA.fields.title.toLowerCase(); 
        const titleB = objectB.fields.title.toLowerCase();
  
        if (sortOrder === "asc") {
         if (titleA > titleB) return 1; 
         if (titleA < titleB) return -1;
        } else {
          if (titleA < titleB) return 1; 
          if (titleA > titleB) return -1;
        return 0; 
        }
      });

      const todos = data.records
        .filter(record => record.fields.title)
        .map((record) => ({
          id: record.id,
          title: record.fields.title,
          completeAt: record.fields.completeAt,
        }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log("Fetch Error", error.message);
    }
  }, [sortOrder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // End of GET

  // Beginning of POST - Function to add a new todo to Airtable and update the todoList
  const addTodoToAPI = async (newTitle) => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          title: newTitle,
        },
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const newTodo = {
        id: data.id,
        title: data.fields.title,
      };

      return newTodo; // Return the newTodo object instead of directly updating state here
    } catch (error) {
      console.log("Fetch Error", error.message);
    }
  };
  // End of POST

  // Beginning of DELETE
  const deleteTodo = async (id) => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("Delete Error", error.message);
    }
  };
  // End of DELETE

  // Beginning of UPDATE
  const updateTodoInAPI = async (id, newTitle) => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          title: newTitle,
        },
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const updatedTodo = {
        id: data.id,
        title: data.fields.title,
      };

      setTodoList((prevList) =>
        prevList.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.log("Update Error", error.message);
    }
  };
  // End of UPDATE

  // useEffect to run the fetchData function when the component first renders
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // useEffect to save the todoList to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // Function to add a new todo to the list
  const addTodo = async (newTodo) => {
    const todoWithId = {
      id: uuidv4(), // Generate a unique UUID
      title: newTodo.title, // Get the title from the newTodo object
    };

    // Wait for the API call to complete
    const addedTodo = await addTodoToAPI(todoWithId.title); 
    if (addedTodo) {
      setTodoList((prevList) => [...prevList, addedTodo]); // Only update state after the API response
    }
  };

  // Function to remove a todo from the list
  const removeTodo = (id) => {
    deleteTodo(id);
  };

  // Function to handle the update action
  const updateTodo = (id, updatedTitle) => {
    updateTodoInAPI(id, updatedTitle);
  };

  return (
    <>
      <h1>
        {" "}
        <FontAwesomeIcon icon={faHeartPulse} /> Todo List
      </h1>
      <button onClick={() => setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"))}>
        Let's Sort it Out ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>

      {(() => {
        if (isLoading) {
          return <p>Loading...</p>;
        } else {
          return (
            <>
              <AddTodoForm onAddTodo={addTodo} inputRef={inputRef} />
              <hr />
              <TodoList
                list={todoList}
                title={"Healthy habits"}
                onRemoveTodo={removeTodo}
                onUpdateTodo={updateTodo}
              />
            </>
          );
        }
      })()}
    </>
  );
};

// TodoContainer.propTypes = {
//     onAddTodo: PropTypes.func,    
//     onRemoveTodo: PropTypes.func, 
//     onUpdateTodo: PropTypes.func,  
// };

export default TodoContainer;
