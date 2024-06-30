import { useState } from "react";

export default function Counter() {
  // console.log(useState(1));
  let [count, setCount] = useState(0); // deconstructing the return array
  function incCounter(event) {
    setCount(count + 1);
    console.log(event);
    console.log(count);
  }
  return (
    <>
      <h2>Counter = {count}</h2>
      {console.log(count)}
      <button onClick={incCounter}>Increase Counter</button>
    </>
  );
}
