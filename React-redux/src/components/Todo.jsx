import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  let dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <h3>This is heading</h3>
      <ul>
        {todos.map((obj) => (
          <li key={obj.id}>
            {obj.task}
            <button onClick={() => handleDelete(obj.id)}>Delete</button> &nbsp;
            &nbsp; <button>Mark as done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
