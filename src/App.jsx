import * as React from "react";

const todolist = [
  {
    title:" Drink water",
    objectID: 0,
    id: "First:",
  },
  {
    title: " Eat healthy food",
    objectID: 1,
    id:"Second:",
  },
  {
  title: " Physical activity",
  objectID: 2,
  id:"Third:",
},
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <label htmlFor="search">Search:</label>
      <input id="serach" type="text" />

      <hr />

      <ul>
        {todolist.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>{item.id}</span>
              <span>{item.title}</span>
            
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
