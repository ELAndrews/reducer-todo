import React, { useReducer } from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoList(props) {
  const [state, dispatch] = useReducer(props.reducer, props.initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: "INPUT_CHANGE", payload: { name, value } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch({ type: "ADD_TODO", payload: { name, value } });
  };

  const handleClick = e => {
    dispatch({ type: "CLEAR_COMPLETED" });
    console.log(`event happened`, state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>To do list:</h3>
        <label>
          {" "}
          Task:
          <input
            type="text"
            name="newTask"
            onChange={handleChange}
            value={state.newTask}
          />
        </label>
        <input type="submit" />
      </form>
      <button onClick={handleClick}>Clean up!</button>
      <div className="ToDoContainer">
        {state.todos.map((curr, index) => {
          return (
            <div key={index}>
              <ToDoCard
                curr={curr}
                index={index}
                {...props}
                dispatch={dispatch}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
