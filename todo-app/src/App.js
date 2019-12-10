import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  const initialState = {
    todos: [
      {
        task: "Complete MVP",
        isCompleted: false,
        id: Date.now()
      }
    ],
    todo: {
      task: "",
      isCompleted: false,
      id: Date.now()
    }
  };

  const INPUT_CHANGE = "INPUT_CHANGE";
  const ADD_TODO = "ADD_TODO";
  const MARK = "MARK";
  const CLEAR_COMPLETED = "CLEAR_COMPLETED";

  function reducer(state, action) {
    switch (action.type) {
      case INPUT_CHANGE:
        return {
          ...state,
          todo: { ...state.todo, [action.payload.name]: action.payload.value }
        };
      case ADD_TODO:
        // const newToDoList = state.todos.push(state.todo);
        return { todos: [...state.todos, state.todo] };
      case MARK:
        return {};
      case CLEAR_COMPLETED:
        return {};
      default:
        return state;
    }
  }

  return (
    <div>
      <Header />
      <ToDoList
        reducer={reducer}
        INPUT_CHANGE={INPUT_CHANGE}
        ADD_TODO={ADD_TODO}
        initialState={initialState}
      />
    </div>
  );
}

export default App;
