import React from "react";
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";

function TodoListCompleted() {
  const todos = useAppSelector((state) => state.todosApp.todos);
  console.log(todos);

  return (
    <div
      className="my-0
        mx-auto p-5 bg-zinc-200 shadow-xl min-w-[300px] min-h-[300px] text-center"
    >
      <h1>выполненные задачи </h1>
      {todos?.map((todo) =>
        todo.completed ? (
          <div className="flex flex-col line-through">{todo.title}</div>
        ) : (
          <div>{""}</div>
        )
      )}
      <div className="flex flex-col mt-[30px]">
        <div className=" border border-gray-500 hover:bg-gray-600">
          <Link to="/todo-list-typescript-redux-toolkit">
            <button>Все задачи</button>
          </Link>
        </div>
        <div className=" border border-gray-500 hover:bg-gray-600 mt-[10px]">
          <Link to="/nocompleted">
            <button>не выполненная </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TodoListCompleted;
