import * as React from "react";

const list = [
  {
    title: " Drink water",
    objectID: 0,
    id: "First:",
  },
  {
    title: " Eat healthy food",
    objectID: 1,
    id: "Second:",
  },
  {
    title: " Physical activity",
    objectID: 2,
    id: "Third:",
  },
];

const TodoList = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>{item.id}</span>
        <span>{item.title}</span>
      </li>
    ))}
  </ul>
);

export default TodoList;
