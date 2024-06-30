import { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    // using useCallback for optimization, it stores the values of state and function in cache
    // as we don't want to run the whole function again
    let pass = "";
    let str = "ABCDEFGHTIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+-";

    for (let index = 0; index < length; index++) {
      let charIdx = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIdx);
    }
    setPassword(pass);
  }, [numAllowed, charAllowed, length, setPassword]);

  let copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(
    // this is for calling the fn, can be done with only useEffect(), by replacing the generatePassword() with the code
    () => generatePassword(),
    [length, charAllowed, numAllowed, generatePassword]
  );

  return (
    <div className=" w-full shadow-md max-w-md bg-gray-700 mx-auto text-center rounded-lg  my-8 px-4 py-2 ">
      <h5 className="text-white">Password Generator</h5>
      <div className="flex justify-center">
        <input
          type="text"
          value={password}
          className=" my-2 mx-2 rounded-md w-full px-2 py-1 outline-none"
          readOnly
          placeholder="Password"
        />
        <button
          className="bg-blue-700 text-sm h-10 my-2 text-white px-2 shrink-0 rounded-md "
          onClick={copyPassword}>
          copy
        </button>
      </div>
      <div className="w-full shadow-md max-w-md px-2 flex gap-3">
        <div className="my-2 flex itmes-center  gap-x-2">
          <input
            type="range"
            className="cursor-pointer"
            min={8}
            max={100}
            value={length}
            onChange={(event) => setLength(event.target.value)}
            ref={passRef}
          />
          <label className="text-orange-700 min-w-max">Length: {length}</label>
        </div>
        <div className="my-2 flex itmes-center  gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            value={numAllowed}
            onClick={(event) => setNumAllowed((prev) => !prev)}
          />
          <label className="text-orange-700 min-w-max">Numbers</label>
        </div>
        <div className="my-2 flex itmes-center  gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            value={charAllowed}
            onClick={(event) => setCharAllowed((prev) => !prev)}
          />
          <label className="text-orange-700 min-w-max">Characters</label>
        </div>
      </div>
    </div>
  );
}
