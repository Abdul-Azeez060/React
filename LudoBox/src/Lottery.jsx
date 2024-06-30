import { useState } from "react";

export default function Lottery() {
  let [ticktNums, changeTicketNum] = useState(getTicket(5));
  console.log(randomNum);

  function getTicket(n) {
    for (let i = 0; i < n; i++) {
      arr.push(Math.ceil(Math.random() * 10));
    }
    return arr;
  }

  let [isWin, changeIsWin] = useState(false);

  let checkNum = () => {
    let n = Math.ceil(Math.random() * 1000);
    changeRandomNum(n);
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;
      sum = sum + rem;
      n = Math.floor(n / 10);
    }
    console.log(sum);
    if (sum == 15) {
      changeIsWin(true);
    } else {
      changeIsWin(false);
    }
  };
  return (
    <>
      <h2>{isWin ? "Won Lottery" : "Lottery"}</h2>
      <p>Your number is {randomNum}</p>
      <button onClick={checkNum}>Get new Ticket</button>
    </>
  );
}
