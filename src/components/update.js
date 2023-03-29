import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdatePosts } from "../Hooks/modules";

const Update = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  // const { mutate, info } = useMutation(async () => {
  const updateUsers = async () => {
    return (
      await axios.put(`https://6304ae4094b8c58fd722bcdf.mockapi.io/api/${id}`, {
        name: name,
        email: email,
      }),
      navigate("/")
    );
  };
  // const { mutate, info } = useMutation();

  // const { mutate, info } = useUpdatePosts();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const updatePosts = { name: name, email: email };
  //   mutate(updatePosts);
  //   const massage = "success";
  //   alert(massage);
  // };
  // console.log(info);

  return (
    <div className="body">
      <div className="main">Update Form</div>
      <div className="form">
        <label>Name :</label>
        <input
          type="text"
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email :</label>
        <input
          type="text"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={updateUsers}>Update</button>
      </div>
    </div>
  );
};

export default Update;
