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
    newTask: ""
  };

  const INPUT_CHANGE = "INPUT_CHANGE";
  const ADD_TODO = "ADD_TODO";
  const RESET_INPUT = "RESET_INPUT";
  const MARK = "MARK";
  const CLEAR_COMPLETED = "CLEAR_COMPLETED";

  function reducer(state, action) {
    switch (action.type) {
      case INPUT_CHANGE:
        return {
          ...state,
          newTask: action.payload.value
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            { task: state.newTask, isCompleted: false, id: Date.now() }
          ]
        };
      case RESET_INPUT:
        return {
          ...state,
          newTask: ""
        };
      case MARK:
        return {
          ...state,
          todos: [
            ...state.todos.map(curr => {
              if (curr.id === Number(action.payload.id)) {
                return { ...curr, isCompleted: action.payload.value };
              }
              return curr;
            })
          ]
        };
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
