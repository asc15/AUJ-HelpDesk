import React, { useEffect, useState } from "react";
import "./Common.css";
import User from "../Common/user.png";

import { Link, useNavigate } from "react-router-dom";
export default function LeftContainer() {
  const logoutHandler = () => {
    sessionStorage.clear();
  };
  const navigate=useNavigate()
  const [username,setName]=useState("")
  useEffect(()=>{
    setName(sessionStorage.getItem("name"))
  })
  return (
    <div className="side">
      
        <button className="home" onClick={()=> navigate('/home',{state:{message:""}})}>Home</button>
    
      <Link to="/viewprofile">
        {" "}
        <button className="profile">Profile</button>
      </Link>
      <Link to="/allquestion"><button className="pastq">Recent Questions</button></Link>
      <Link to="/myquestion"><button className="selfq">My Questions</button></Link>
      <span className="welcome-back">Welcome Back , {username}</span>
      <Link to="/">
        {" "}
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      </Link>
    </div>
  );
}
