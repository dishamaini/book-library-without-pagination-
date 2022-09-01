import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    rollno: "",
    name: "",
    sclass: "",
    date: "",
    code: "",
  });

  const { name, date, code } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New Book Details</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Student Roll No"
              name="S. No."
              value={rollno}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Book Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Student Class"
              name="sclass"
              value={sclass}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Issue Date"
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Book Code"
              name="code"
              value={code}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">
            Add Book Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
