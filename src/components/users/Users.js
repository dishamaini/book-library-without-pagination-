import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    rollno: "",
    name: "",
    sclass: "",  
    date: "",
    code: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      {/* <h1 className="display-4">Serial Number: {id}</h1> */}
      <hr />
      <ul className="list-group w-50">
        {/* <li className="list-group-item">rollno: {user.rollno}</li> */}
        <li className="list-group-item">name: {user.name}</li>
        {/* <li className="list-group-item">sclass: {user.sclass}</li> */}
        <li className="list-group-item">date: {user.date}</li>
        <li className="list-group-item">code: {user.code}</li>
      </ul>
    </div>
  );
};

export default User;