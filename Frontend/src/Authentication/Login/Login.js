import React, { useState } from "react";
import LeftContainer, { Header, Footer } from "../Common/LeftContainer";
import "../Common/Common.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Services from "../../service/Services.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginhtmlForm() {
  
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    if(email==="" && password===""){
      toast.warn("Please provide Email and Password.")
    }
    else if(email==="")
    {
        toast.warn("Please provide Email.")
    }
    else if(password===""){
      toast.warn("Please provide Password")
    } 
    else{
      Services.login(email, password)
      .then((Res) => {
        if (Res.data.message === "success") {
          navigate('/home',{state:{message:"Login Successful"}})
          sessionStorage.setItem("id",Res.data.id);
          sessionStorage.setItem("name",Res.data.name);
          sessionStorage.setItem("department",Res.data.department);
          sessionStorage.setItem("role",Res.data.role)
        }
        else {
          toast.error(Res.data.message)
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <div className="flex-item-right">
        <form action="" className="login-form">
          <div className="inputContainer">
            <h6 className="welcome"> Whelcome to AujHelpDesk</h6>

            <h2 className="title">
              <u>Login</u>
            </h2>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="label">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="" className="label">
              Password
            </label>
          </div>{" "}
          <input
            type="submit"
            className="login-btn"
            value="Login"
            onClick={loginHandler}
          />
          <hr />
          <label>Dont have a account ?</label>
          <Link to="/register">
            {" "}
            <input type="submit" className="register-btn" value="Register" />
          </Link>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
}
function Login() {
  return (
    <>
      <Header />
      <LeftContainer />
      <LoginhtmlForm />
      <Footer />
    </>
  );
}
export default Login;
