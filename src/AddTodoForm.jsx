import * as React from "react";

const AddTodoForm = () => (
  <form>
    <label htmlFor="todoTitle">Title</label>
    <input id="todoTitle" type="text" />
    <button tyep="submit">Add</button>
  </form>
);

export default AddTodoForm;
