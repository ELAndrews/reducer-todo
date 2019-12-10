import React from "react";

export default function ToDoCard(props) {
  const handleChange = e => {
    const { id, name, value } = e.target;
    props.dispatch({ type: "MARK", payload: { id, name, value } });
    console.log(`event happened`, props.curr);
  };

  return (
    <div>
      <span>{props.curr.task}</span>
      <input
        type="checkbox"
        name="isCompleted"
        id={props.curr.id}
        checked={props.curr.isCompleted}
        value={!props.curr.isCompleted}
        onChange={handleChange}
      />
    </div>
  );
}
