import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 0,
  });

  function handleInputData(event) {
    setFormData((data) => {
      return { ...data, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 0,
    });
  }
  return (
    <>
      <h2>Give a comment!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label> &nbsp;
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleInputData}
        />
        <br /> <br />
        <label htmlFor="remarks">Remarks</label> &nbsp;
        <textarea
          name="remarks"
          id="remarks"
          rows={3}
          value={formData.remarks}
          onChange={handleInputData}></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label> &nbsp;
        <input
          type="number"
          placeholder="rating"
          id="rating"
          min={1}
          max={5}
          name="rating"
          value={formData.rating}
          onChange={handleInputData}
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </>
  );
}
