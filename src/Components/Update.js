import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
  }, [])
  

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://63b23c4b5e490925c5157812.mockapi.io/crud-learning/${id}` , {
        name : name,
        email: email,
    }).then(()=>{
        navigate("/read");
    })
  };

  return (
    <>
    <div className="heading d-flex justify-content-between mt-5">
        <h1 className="pb-2">Update</h1>
        <Link to="/read">
        <button className="btn btn-primary">Show Data</button>
        </Link>
        <Link to="/">
        <button className="btn btn-primary">Create</button>
        </Link>
    </div>

      <form className="border border-dark p-5 mt-5">
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo Message
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write your todo message here"
            value={email}
          />
        </div>
        {/* {name}
          {email} */}
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleUpdate}
        >
          Edit
        </button>
      </form>
    </>
  );
};

export default Update;
