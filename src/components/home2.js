import React, { useState } from "react";
import "../desigen/App.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const Newhomepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   const navigate = useNavigate();

  const { isLoading, error, mutate } = (useMutation) => {};

  if (isLoading) return <h2>"Add Todo...."</h2>;

  if (error) return <h2>error is created</h2> + error.message;

  // const onSubmit = () => {
  //   console.log({ name, email });
  //   const addPost = { name: name, email: email };
  //   mutate(addPost);
  //   const message = "success";
  //   alert(message);
  // };
  const onSubmit = (name, email) => {
    console.log(name, email);

    mutate({ name, email });
  };
  // const postData = async () => {
  //   await axios.post("https://6304ae4094b8c58fd722bcdf.mockapi.io/api", {
  //     email,
  //     name,
  //   });
  //   navigate("/");
  // };
  return (
    <div className="body">
      <div className="main">DATA FORM</div>
      <form>
        <div className="form">
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter Name.."
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label>Email :</label>
          <input
            type="text"
            placeholder="Enter Email.."
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <button onClick={onSubmit}>Submit</button>
        </div>
        <div>
          <br />
        </div>
      </form>
    </div>
  );
};

export default Newhomepage;
