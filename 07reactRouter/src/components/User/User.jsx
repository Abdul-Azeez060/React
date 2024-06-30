import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className=" h-20 w-full bg-orange-200 text-black text-lg text-center ">
      User: {id}{" "}
    </div>
  );
}

export default User;
