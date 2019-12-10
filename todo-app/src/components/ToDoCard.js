import React from "react";

export default function ToDoCard(props) {
  const handleChange = e => {
    const { id, name, value } = e.target;
    props.dispatch({ type: "MARK", payload: { id, name, value } });
  };

  return (
    <div>
      <span>{props.curr.task}</span>
      <input
        type="checkbox"
        name="isCompleted"
        id={props.curr.id}
        value={!props.curr.isCompleted}
        onChange={handleChange}
      />
    </div>
  );
}
