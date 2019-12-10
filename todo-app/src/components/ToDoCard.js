import React from "react";
import { cursor } from "sisteransi";

export default function ToDoCard(props) {
  return (
    <div>
      <span>{props.curr.task}</span>
      <input type="checkbox" value={props.curr.isCompleted} />
    </div>
  );
}
