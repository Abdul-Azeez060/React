import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/index";
import { TodoForm, TodoItem } from "./components/index.js";

function App() {
  const [todos, setTodos] = useState([]);
  const id = 1;

  function addTodo(todo) {
    setTodos([...todos, { id: Date.now(), todo: todo, completed: false }]);
  }

  function updateTodo(todo, id) {
    setTodos(
      todos.map((singleTodo) =>
        singleTodo.id === id ? { ...singleTodo, todo: todo } : singleTodo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((singleTodo) => singleTodo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((singleTodo) =>
        singleTodo.id === id
          ? { ...singleTodo, completed: !singleTodo.completed }
          : singleTodo
      )
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((stodo) => (
              <div key={stodo.id} className="w-full">
                {" "}
                <TodoItem todo={stodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
