import React, { useState } from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const [updatedText, setUpdatedText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const updateDoneHandler = () => {
    if (updatedText) {
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              text: updatedText,
            };
          }
          return item;
        })
      );
      setUpdatedText("");
      setIsUpdate(!isUpdate);
    } else {
      alert("Please enter a todo value to update");
    }
  };

  const updateHandler = () => {
    setIsUpdate(!isUpdate);
    setUpdatedText(text);
  };

  const updateInputHandler = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <div className="todo">
      {isUpdate ? (
        <li className="update-todo-container">
          <input
            type="text"
            className="update-todo-input"
            value={updatedText}
            onChange={updateInputHandler}
            autoFocus
          />
          <button onClick={updateDoneHandler} className="update-done-btn">
            <i className="fas fa-check-double"></i>
          </button>
        </li>
      ) : (
        <>
          <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {text}
          </li>
          <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
          </button>
          <button onClick={updateHandler} className="update-btn">
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
