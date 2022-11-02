import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { ITodo } from "../Types";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { addTodo } from "../store/slice/todoSlice";
import { useAppDispatch } from "./../store/hooks";
import { Link } from "react-router-dom";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todosApp.todos);

  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handelAction = () => {
    if (title.trim().length) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div
      className="my-0
      mx-auto p-5 bg-zinc-200 shadow-xl min-w-[300px] min-h-[300px] text-center"
    >
      <h1 className="mb-[20px] uppercase">todo list typescript redux toolkit</h1>
      <TodoForm
        value={title}
        updateText={setTitle}
        handelAction={handelAction}
      />
      <ul>
        {todos?.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <div className="flex flex-col mt-[30px]">
        <div className=" border border-gray-500 hover:bg-gray-600">
          <Link to="/completed">
            <button className="">выполненная</button>
          </Link>
        </div>
        <div className=" border border-gray-500 hover:bg-gray-600 mt-[10px]">
          <Link to="/nocompleted">
            <button>Не выполненная </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export { TodoList };
