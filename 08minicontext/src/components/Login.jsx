import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name,
      password,
    });
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="username"
        onChange={(event) => setname(event.target.value)}
      />{" "}
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(event) => setpassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
