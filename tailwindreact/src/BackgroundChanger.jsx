import { useState } from "react";

export default function BackgroundChanger() {
  const [color, setColor] = useState("olive");
  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className=" fixed flex bottom-12 justify-center px-2 inset-x-0">
        <div className="flex justify-center px-2 border-spacing-2 gap-3 bg-white shadow-lg py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none rounded-lg shadow-lg px-2 py-2 w-14 "
            style={{ backgroundColor: "red", color: "white" }}>
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none rounded-lg shadow-lg px-2 py-2 w-14 "
            style={{ backgroundColor: "green", color: "white" }}>
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none rounded-lg shadow-lg px-2 py-2 w-14 "
            style={{ backgroundColor: "Blue", color: "white" }}>
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}
