import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function User() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return <div>Welcome {user.name}</div>;
}
