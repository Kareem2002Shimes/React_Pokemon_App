import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { setCheck } from "../features/TodoSlice";
import "./TodoItem.css";

const TodoItem = ({ name, done, id }) => {
  const dispach = useDispatch();
  const handleCheck = () => {
    dispach(setCheck(id));
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        id={id}
        checked={done}
        onChange={handleCheck}
      />
      <label htmlFor={id} className={done ? "active" : ""}>
        {name}
      </label>
    </div>
  );
};

export default TodoItem;
