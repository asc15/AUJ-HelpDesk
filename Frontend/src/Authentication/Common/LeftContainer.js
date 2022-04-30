import React from "react";
import First from "./AujHome.gif";
import Third from "./AujHome2.png";
import "./Common.css";
function LeftContainer() {
  return (
    <div className="flex-item-left">
      <img src={First} className="first-img" />
    </div>
  );
}
function Header() {
  return (
    <div className="auth-header">
      <img src={Third} className="third-img" />
      <a href="" className="visit-auj-home">
        Official Homepage
      </a>
    </div>
  );
}
function Footer() {
  return (
    <div className="auth-footer">
      <div className="main-footer-div">
        <div className="social-footer">
          <h4 className="contact-us">
            Follow our Official Social Media Handle
          </h4>
          <a href="#" className="fa fa-facebook"></a>{" "}
          <a href="#" className="fa fa-twitter"></a>{" "}
          <a href="#" className="fa fa-instagram"></a>{" "}
          <a href="#" className="fa fa-youtube"></a>{" "}
          <h5 className="contact-us">
            This Website is Created By : Anmol Singh{" "}
            <a href="#" className="fa fa-linkedin"></a>{" "}
          </h5>
        </div>
        <a href="" />
      </div>
    </div>
  );
}
export default LeftContainer;
export { Header, Footer };
