import { useState } from "react";
import { ITodo } from "../Types";
import { TodoList } from "./TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "./../store/hooks";
import { removeTodo, toggleComplete } from "../store/slice/todoSlice";

interface todoitemProps {
  todo: ITodo;
}

function TodoItem(props: todoitemProps) {


  const dispatch = useAppDispatch();

  return (


    <li className="mt-[20px]">
      <div className="flex justify-between">
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => dispatch(toggleComplete(props.todo.id))}
        />
        {/* <span >{props.todo.title}</span> */}
              <span className={props.todo.completed ? "line-through" :   "no-underline"}>{props.todo.title}</span>
        <RiCloseCircleLine
        
          size={20}
          onClick={() => dispatch(removeTodo(props.todo.id))}
          className="edit-icon cursor-pointer"
        />
      </div>
    </li>
  );
}

export default TodoItem;
