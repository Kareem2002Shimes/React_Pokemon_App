import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done ? (item.done = false) : (item.done = true);
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = TodoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default TodoSlice.reducer;
