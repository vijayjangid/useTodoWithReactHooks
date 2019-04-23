import React, { useReducer, useState, useEffect } from "react";
import TodosReducer, { TodosActionTypes } from "./TodosReducer";
import Todo from "../TodoItem";

import "./styles.css";

const initialTodos = [
  { text: "Let's have fun with hooks!", completed: false },
  { text: "Time to useYourImagination", completed: false },
  { text: "Understand the myths around hooks...", completed: false },
  {
    text: "Let's change all the existing classes to hooks tonight!",
    completed: true
  }
];
export default function Todos() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(TodosReducer, initialTodos);

  // whenever there is any change in todos, save it to localstorage as part of a side effect
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  // add todo action creator
  function addTodo() {
    newTodo &&
      newTodo.length &&
      newTodo.trim().length &&
      dispatch({
        type: TodosActionTypes.ADD,
        payload: {
          text: newTodo,
          completed: false
        }
      });
    setNewTodo("");
  }

  // delete all todo action creator
  function deleteAll() {
    dispatch({
      type: TodosActionTypes.DELETE_ALL
    });
  }

  // mark selected todo as complete/incomplete
  function toggleCompleted(index, completed) {
    dispatch({
      type: TodosActionTypes.TOGGLE_COMPLETED,
      payload: {
        index,
        completed
      }
    });
  }
  return (
    <>
      <h1>Your Todo items</h1>
      <input
        className="text-new-todo"
        type="text"
        placeholder="Type here something and press enter"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        onKeyUp={e => e.which === 13 && addTodo()}
      />
      <button className="btn-new-todo" onClick={addTodo}>
        <i className="fas fa-plus" />
      </button>
      <button
        className="btn-delete-todos"
        onClick={deleteAll}
        title="Delete all todos"
      >
        <i className="far fa-trash-alt" />
      </button>
      <div className="todos-container">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleCompleted={completed => toggleCompleted(index, completed)}
          />
        ))}
      </div>
    </>
  );
}
