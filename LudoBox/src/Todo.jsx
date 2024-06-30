import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todoList, addTodoList] = useState([
    { task: "code", id: uuidv4(), isDone: false },
  ]);
  let [inputVar, changeInputVar] = useState("");
  let addList = (event) => {
    changeInputVar(event.target.value);
  };

  let addToList = (event) => {
    addTodoList([...todoList, { task: inputVar, id: uuidv4(), isDone: false }]);
    changeInputVar("");
  };

  let [isTicked, setTick] = useState(true);

  let deleteList = (id) => {
    addTodoList(todoList.filter((ele) => ele.id != id));
  };

  //   let upperCaseAll = () => {
  //     addTodoList(
  //       todoList.map((ele) => {
  //         return { ...ele, task: ele.task.toUpperCase() };
  //       })
  //     );
  //   };

  let markAsDoneAll = (event) => {
    //map()
    addTodoList(
      todoList.map((ele) => {
        return { ...ele, isDone: !ele.isDone };
      })
    );
    setTick(!isTicked);
  };

  let markOne = (id) => {
    // modify so use map
    addTodoList(
      todoList.map((element) => {
        if (element.id == id) {
          return { ...element, isDone: !element.isDone };
        } else {
          return element;
        }
      })
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="add a new task"
        value={inputVar}
        onChange={addList}
      />
      <button onClick={addToList}>Add</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todoList.map((element) => (
          <li key={element.id}>
            <span
              style={
                element.isDone
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }>
              {element.task}
            </span>
            &nbsp; &nbsp;
            <button onClick={() => deleteList(element.id)}>Delete</button>
            &nbsp;
            <button onClick={() => markOne(element.id)}>
              {element.isDone ? "Mark as unDone" : "Mark as Done"}
            </button>
            <br /> <br />
          </li>
        ))}
      </ul>
      <button onClick={markAsDoneAll}>
        {isTicked ? "Mark as Done" : "Mark as unDone"}
      </button>
    </>
  );
}
