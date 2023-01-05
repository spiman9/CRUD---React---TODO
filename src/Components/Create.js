import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const header = { "your token comes here": "*" };
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name }, { email });
    axios.post("https://63b23c4b5e490925c5157812.mockapi.io/crud-learning", {
      name: name,
      email: email,
      header,
    }).then(()=>{
      history("/read")
    })
  };

  return (
    <>
      <div className="mt-5  p-5 ">
        <div className="heading d-flex justify-content-between">
          <h1 className="font-weight-bold ">Create Todo</h1>
          <Link to="/read"><button className="btn btn-secondary">Show data</button></Link>
          
        </div>

        <form className="border border-dark p-5 mt-5">
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >
              Todo Message
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your todo message here"
            />
          </div>
          {/* {name}
          {email} */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
