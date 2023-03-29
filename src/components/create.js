/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../desigen/App.css";
import axios from "axios";
import { useDeletePosts, useGetAllUsers } from "../Hooks/modules";
import { useMutation } from "@tanstack/react-query";
import { invalidateQuery } from "../services";

const create = () => {
  const navigate = useNavigate();

  const { isLoading, error, data } = useGetAllUsers();
  // const { mutate } = useDeletePosts();
  const deleteUser = (id) => {
    return axios.delete(
      `https://6304ae4094b8c58fd722bcdf.mockapi.io/api/${id}`
    );
  };

  const ondelete = useMutation(deleteUser, {
    onSuccess: () => {
      invalidateQuery();
    },
  });
  console.log(data, "error accrued");

  if (isLoading) return <h2>Loading..."</h2>;

  if (error) return "error as created" + error.message;

  // const onSubmit = (id) => {
  //   mutate(id);
  // };

  return (
    <div>
      {}
      <div>
        <button className="button_add" onClick={() => navigate("/home")}>
          Add Data
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((data) => {
            return (
              <>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td className="button">
                    <Link to={`/update/${data.id}`}>
                      <button
                      // onClick={() => setData(data.id, data.email, data.name)}
                      >
                        Edit{" "}
                      </button>
                    </Link>
                    <button onClick={() => ondelete.mutate(data.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default create;
