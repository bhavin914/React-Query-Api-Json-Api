import React, { useState } from "react";
import "../desigen/App.css";
import { useNavigate } from "react-router-dom";
import { useAddPosts } from "../Hooks/modules";
import { invalidateQuery } from "../services";

const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  const { mutate } = useAddPosts({
    onSuccess: (variables) => {
      console.log("okk", variables);
      invalidateQuery(["module"]);
      // navigate("/");
    },
  });

  // const postData = async (post) => {
  //   return await axios.post(
  //     "https://6304ae4094b8c58fd722bcdf.mockapi.io/api",
  //     post,
  //     navigate("/")
  //   );
  // };

  // const { mutate } = useMutation(postData, {
  //   onSuccess: (data, variables, context) => {
  //     console.log("okk", variables);
  //   },
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
    const addPost = { name: name, email: email };
    mutate(addPost);
    const message = "success";
    alert(message);
  };

  return (
    <div className="body">
      <div className="main">DATA FORM</div>
      <form>
        <div className="form">
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter Name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label>Email :</label>
          <input
            type="text"
            placeholder="Enter Email.."
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

export default Homepage;
