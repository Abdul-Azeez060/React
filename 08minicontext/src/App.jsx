import "./App.css";
import Login from "./components/Login";
import User from "./components/User";
import UserContextProvider from "./context/UserContextProvider";
import React from "react";

function App() {
  return (
    <UserContextProvider>
      <h1>This is for context api </h1>
      <Login />
      <User />
    </UserContextProvider>
  );
}

export default App;
