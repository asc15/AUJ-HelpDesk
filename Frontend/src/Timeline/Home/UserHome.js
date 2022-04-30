import AskTab from "../Common/AskTab";
import LeftContainer from "../Common/LeftContainer";
import { Header, Footer } from "../../Authentication/Common/LeftContainer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function UserHome() {
  let location = useLocation();
  useEffect(() => {
    if (location.state.message !== "") {
      toast.success(location.state.message);
    }
  },[location.state.message]);
  return (
    <>
      <ToastContainer />
      <Header />
      <LeftContainer />
      <AskTab />
      <Footer />
    </>
  );
}
export default UserHome;
