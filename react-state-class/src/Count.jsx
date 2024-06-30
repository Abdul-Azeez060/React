import { useEffect, useState } from "react";

export default function Count() {
  let [countx, incCountx] = useState(0);
  let [county, incCounty] = useState(0);

  function incNumx() {
    incCountx((count) => count + 1);
  }

  function incNumy() {
    incCounty((count) => count + 1);
  }

  //useEffect()
  useEffect(
    function updateCount() {
      console.log("This is a re render in any componenet");
    },
    [countx]
  );
  return (
    <>
      <h3>Count</h3>
      <button onClick={incNumx}>+{countx}</button>
      <button onClick={incNumy}>+{county}</button>
    </>
  );
}
