import { useState } from "react";
import { TodoContext, useTodo } from "../contexts";

function TodoForm() {
  const { addTodo } = useTodo();
  const [todoInput, setTodoInput] = useState("");
  function handleForm(e) {
    console.log(todoInput);
    e.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  }
  return (
    <form className="flex" onSubmit={handleForm}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
