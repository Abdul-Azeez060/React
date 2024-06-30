import { useState } from "react";
let style = {
  height: "25rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};
export default function LudoBoard() {
  let [moves, incMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  function incBlue() {
    console.log(`moves.blue = ${moves.blue}`);
    // here a new obj is created, if we directly assign moves = moves then both ref variables point to same address/same object
    // incMoves({ ...moves, blue: moves.blue + 1 }); //here the new blue value depends on old blue value so use callbacks
    incMoves((prevValues) => {
      return { ...prevValues, blue: moves.blue + 1 };
    });
  }
  function incYellow() {
    console.log(`moves.blue = ${moves.yellow}`);
    incMoves((prevValues) => {
      return { ...prevValues, yellow: moves.yellow + 1 };
    });
  }
  return (
    <>
      <div style={style}>
        Game begins
        <p>Blue Moves = {moves.blue}</p>
        <button
          className="blue"
          style={{
            backgroundColor: "blue",
            marginRight: "1rem",
            color: "white",
            fontSize: "1.5rem",
          }}
          onClick={incBlue}>
          +1
        </button>
        <p>Green Moves = {moves.green}</p>
        <button
          className="green"
          style={{
            backgroundColor: "green",
            marginRight: "1rem",
            color: "white",
            fontSize: "1.5rem",
          }}>
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          className="yellow"
          style={{
            backgroundColor: "yellow",
            marginRight: "1rem",
            fontSize: "1.5rem",
          }}
          onClick={incYellow}>
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button
          className="red"
          style={{
            backgroundColor: "red",
            marginRight: "1rem",
            color: "white",
            fontSize: "1.5rem",
          }}>
          +1
        </button>
      </div>
    </>
  );
}
