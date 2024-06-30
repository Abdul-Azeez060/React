import { createSlice, nanoid } from "@reduxjs/toolkit";
// reducers // actions
const initialState = {
  todos: [{ id: 224, task: "write todo", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  // an object of reducers(functions)
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      // action.payload => this is the id which is going to be deleted
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      // action.payload => is the id which needs to be mark as done
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
