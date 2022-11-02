import { ITodo } from "../../Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  todos: ITodo[];
}

const initialState: InitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todosApp",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      if (toggleTodo) {
        toggleTodo.completed = !toggleTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
