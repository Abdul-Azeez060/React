import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // const apiURL = "https://api.github.com/users/abdul-azeez060";

  // useEffect(() => {
  //   fetch(apiURL)
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);
  // console.log(data);
  return (
    <div className=" bg-gray-600 flex-col  m-4 p-3 text-white text-2xl ">
      <p>
        Github followers : {data.followers} <br />
        Github Following: {data.following}
      </p>
      <img src={data.avatar_url} alt="" width={500} />
    </div>
  );
}

export default Github;

export const getLoaderFunction = async () => {
  const res = await fetch("https://api.github.com/users/abdul-azeez060");
  return res.json();
};
