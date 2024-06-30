import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

export default function AddForm() {
  let [data, setData] = useState("");
  let dispatch = useDispatch();

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(addTodo(data));
    setData("");
    // no need state vairable, but action need to be passed in reducer which is data
  };
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(ev) => setData(ev.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
