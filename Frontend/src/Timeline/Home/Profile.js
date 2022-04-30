import LeftContainer from "../Common/LeftContainer";
import "../Common/Common.css";
import { Header, Footer } from "../../Authentication/Common/LeftContainer";
import { useEffect, useState } from "react";
import Services from "../../service/Services.js";
import { Link } from "react-router-dom";
function Profile() {
  let isMounted = true;
  let [profile, setProfile] = useState({
    role: "",
    department: "",
    name: "",
    email: "",
  });
  const UserInfo = () => {
    const s = sessionStorage.getItem("id");
    Services.getProfile(s).then((res) => {
      if (isMounted) {
        console.log(res.data);
        setProfile(res.data);
      }
    });
  };

  useEffect(() => {
    UserInfo();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Header />
      <LeftContainer />
      <div className="right">
        <div className="profile-info">
          <form className="view-profile">
            <label className="description">Name: </label>
            <label className="info">{profile.name}</label>
            <br />
            <label className="description">Email: </label>
            <label className="info">{profile.email}</label>
            <br />
            <label className="description">Designation: </label>
            <label className="info">{profile.role}</label>
            <br />
            <label className="description">Course: </label>
            <label className="info">{profile.department}</label>
            <br />
            <label className="description">
              <Link to="/changepassword">
                <button className="changepassword">Change Password</button>
              </Link>{" "}
            </label>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
