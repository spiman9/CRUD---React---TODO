import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaChessBishop } from "react-icons/fa";
import { Link } from "react-router-dom";

const Read = () => {
  const [arraydata, setArraydata] = useState([]);
  const getData = () => {
    axios
      .get("https://63b23c4b5e490925c5157812.mockapi.io/crud-learning")
      .then((data) => {
        console.log(data.data);
        setArraydata(data.data);
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://63b23c4b5e490925c5157812.mockapi.io/crud-learning/${id}`)
      .then(() => {
        getData();
      });
  }

  const [tabledark, setTabledark] = useState('')

  return (
    <>
      <div class="form-check form-switch mt-5">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() =>{
            if(tabledark === 'table-dark'){
                setTabledark('');
            }else{
                setTabledark('table-dark');
            }
          }}
        />
      </div>

      <div className="header d-flex justify-content-between mt-5 border">
        <h1 className="" style={{ fontSize:'35px' , fontWeight: 'bold' }}>Todo List</h1>
        <Link to="/">
          <button className="btn btn-secondary mt-2 p-3" style={{
              fontSize: '20px' , fontWeight: 'bold'
            }}>Back</button>
        </Link>
      </div>

      <div className="container border-dark">
        <table className={`table ${tabledark}`}>
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Todo Message</th>
              <th scope="col">
                <FaEdit
                  size={20}
                  style={{ color: "black", marginRight: "2rem" }}
                />
              </th>
              <th scope="col">
                <FaChessBishop
                  size={20}
                  style={{ color: "black", marginRight: "2rem" }}
                />
              </th>
            </tr>
          </thead>
          {arraydata.map((each) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{each.id}</th>
                    <td>{each.name}</td>
                    <td>{each.email}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            setToLocalStorage(each.id, each.name, each.email)
                          }
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(each.id)}
                        
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
