import { useState } from "react";

export default function Details() {
  // let [fullName, setFullName] = useState("Azeez");
  // let [userName, setUserName] = useState("abdul@");
  let [inputData, setInputData] = useState({
    fullName: "",
    username: "",
  });

  // function handleNameChange(event) {
  //   setFullName(event.target.value);
  // }

  // function handleUsernameChange(event) {
  //   setUserName(event.target.value);
  // }

  function handleInputChange(event) {
    // let fieldName = event.target.name;
    // let value = event.target.value;
    setInputData((data) => {
      return { ...data, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputData);
    setInputData({
      fullName: "",
      username: "",
    });
  }
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData.fullName}
          onChange={handleInputChange}
          name="fullName"
        />
        <button>Submit</button> <br />
        <br />
        <input
          type="email"
          value={inputData.username}
          onChange={handleInputChange}
          name="username"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
