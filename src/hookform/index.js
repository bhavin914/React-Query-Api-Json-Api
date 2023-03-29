import React from "react";
import { useForm } from "react-hook-form";
import "../assets/app.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

const schema = yup.object({
  name: yup
    .string()
    .required()
    .label("name"),
  email: yup
    .string()
    .email()
    .required()
    .label("email"),
  mobile: yup
    .string()
    .phone()
    .required()
    .min(10)
    .max(10)
    .label("mobile"),
  password: yup
    .string()
    .required()
    .min(6)
    .label("password"),
});

const Formlist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form className="user-card">
        <label>Full Name :</label>
        <input
          type="text"
          label="name"
          placeholder="Enter a name..."
          name="name"
          {...register("name")}

          // {...register("name", {
          //   required: true,
          // })}
        />
        <p>{errors.name?.message || ""}</p>
        {/* {errors.name && errors.name.type === "required" && (
          <p className="errorMsg">Name is Required</p>
        )} */}

        <label>Email :</label>
        <input
          type="text"
          label="email"
          placeholder="Enter a Email..."
          name="email"
          {...register("email")}
        />
        <p>{errors.email?.message || ""}</p>

        <label>Mobile No. :</label>
        <input
          type="text"
          label="mobile"
          placeholder=" Mobile No..."
          name="mobile"
          {...register("mobile")}
        />
        <p>{errors.mobile?.message || ""}</p>

        <label>Password :</label>
        <input
          type="password"
          label="password"
          placeholder="Enter a Password..."
          name="password"
          {...register("password")}
        />
        <p>{errors.password?.message || ""}</p>

        <button onClick={handleSubmit(onSubmit)}>Submit</button>
      </form>
    </div>
  );
};

export default Formlist;
