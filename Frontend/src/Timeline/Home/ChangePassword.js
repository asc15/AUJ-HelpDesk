import "../../Authentication/Common/Common.css";
import LeftContainer from "../Common/LeftContainer";
import { Header, Footer } from "../../Authentication/Common/LeftContainer";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "../../service/Services";
import { Link, useNavigate } from "react-router-dom";
function ChangePassword() {
  const navigate = useNavigate();
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  console.log(oldPassword);
  console.log(newPassword);
  console.log(confirmPassword);
  const changePasswordHandler = (e) => {
    e.preventDefault();

    if (oldPassword !== newPassword && newPassword === confirmPassword) {
      //  toast.warn("password matchg")
      const id = sessionStorage.getItem("id");
      const changePasswordDetails = {
        oldPassword: oldPassword,
        newPassword: newPassword,
      };
      Services.changePassword(changePasswordDetails, id)
        .then((res) => {
          if (res.data === "success") {
            toast.success("Password changed");
             navigate('/home',{state:{message:"Password Changed"}})
          } else {
            toast.warn(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (oldPassword === newPassword) {
      toast.warn("Old and new password same");
    } else if (newPassword !== confirmPassword) {
      toast.warn("Password Don't match");
    }
  };
  return (
    <>
      <Header />
      <LeftContainer />
<ToastContainer/>
      <div
        className="flex-item-right"
        style={{ position: "relative", left: "600px" }}
      >
        <form action="" className="login-form">
          <div className="inputContainer">
            <p style={{ "fontSize": "30px" }}>Create new password</p>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label htmlFor="" className="label">
              Old Password
            </label>
          </div>{" "}
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label htmlFor="" className="label">
              New Password
            </label>
          </div>{" "}
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="" className="label">
              Confirm Password
            </label>
          </div>{" "}
        
            <input
              type="submit"
              className="login-btn"
              value="Change Password"
              onClick={changePasswordHandler}
            />
       
        </form>
      </div>
      <Footer />
    </>
  );
}
export default ChangePassword;
