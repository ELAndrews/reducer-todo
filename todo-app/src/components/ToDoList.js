import React, { useReducer } from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoList(props) {
  const [state, dispatch] = useReducer(props.reducer, props.initialState);

  console.log(state);
  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: props.INPUT_CHANGE, payload: { name, value } });
    console.log(`event happened`, state);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch({ type: props.ADD_TODO, payload: { name, value } });
    console.log(`task added`, state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>To do list:</h3>
        <label>
          {" "}
          Task:
          <input type="text" name="task" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
      <div className="ToDoContainer">
        {state.todos.map((curr, index) => {
          return (
            <div key={index}>
              <ToDoCard curr={curr} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
