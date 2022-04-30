import "../Login/Login.css";
import "../Common/Common.css";
import LeftContainer, { Header, Footer } from "../Common/LeftContainer";
import { Link, useNavigate } from "react-router-dom";
import Services from "../../service/Services";
import { useState } from "react";
import { toast } from "react-toastify";

function Registration() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [department, setDepartment] = useState("");
  let [role, setRole] = useState("");
 
  const createUser = () => {
    const user = {
      name: name,
      department: department,
      email: email,
      password: password,
      role: role,
    };
    Services.registerUser(user)
      .then((Res) => {
        toast.success("Account created!")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <LeftContainer />
      <div className="flex-item-right">
        <form action="" className="login-form">
          <h3 style={{ color: "blue", textAlign: "center", marginTop: "0px" }}>
            <u>Register with Your New Account</u>
          </h3>

          <div className="inputContainer">
            <input
              type="text"
              placeholder="a"
              className="input"
              value={name}
              name="fullname"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="" className="label">
              Full Name
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="a"
              className="input"
              value={department}
              list="department"
              name="department"
              onChange={(e) => setDepartment(e.target.value)}
            />
            <datalist id="department">
              <option value="Btech" />
              <option value="BCA" />
              <option value="MCA" />
              <option value="Economics" />
              <option value="English" />
              <option value="BBA" />
              <option value="BCOM" />
            </datalist>
            <label htmlFor="" className="">
              
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              name="email"
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
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="" className="label">
              Password
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="radio"
              value="Student"
              name="role"
              onClick={(e) => setRole(e.target.value)}
            />{" "}
            Student
            <input
              type="radio"
              value="Teacher"
              name="role"
              onClick={(e) => setRole(e.target.value)}
            />{" "}
            Teacher
          </div>

          <Link to="/">
            <input
              type="submit"
              className="register-btn"
              value="Register Now"
              onClick={createUser}
            />
          </Link>

          {/* <Link to="/register"> <input type="submit" className="register-btn" value="Register" /></Link>
          <a href="" >Forgot password?</a>*/}
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Registration;
