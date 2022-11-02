import { useState, useEffect, useRef } from "react";
import { TodoList } from "./components/TodoList";

import { Routes, Route} from 'react-router-dom';
import { useAppDispatch } from "./store/hooks";
import { addTodo } from "./store/slice/todoSlice";
import TodoListCompleted from './components/TodoListCompleted';
import TodoListNoCompleted from './components/TodoListNoCompleted';

function App() {



  return (
    <div className="flex  items-center bg-stone-300 w-full h-screen py-7 px-7">
      <Routes>
      <Route path="/todo-list-typescript-redux-toolkit" element={<TodoList/>}/>
      <Route path="/completed" element={<TodoListCompleted/>}/>
      <Route path="/nocompleted" element={<TodoListNoCompleted/>}/>
      </Routes>
    </div>
  );
};

export default App;
