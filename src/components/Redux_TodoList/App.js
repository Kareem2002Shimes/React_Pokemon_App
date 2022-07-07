import React from "react";
import Input from "./components/Redux_TodoList/components/input/Input";
import "./App.css";
import TodoItem from "./components/Redux_TodoList/components/todoItem/TodoItem";
import { useSelector } from "react-redux/es/exports";
import { selectTodoList } from "./components/Redux_TodoList/components/features/TodoSlice";

const App = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app-container">
        <div className="todo-container">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
