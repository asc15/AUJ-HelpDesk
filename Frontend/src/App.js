import "./App.css";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import UserHome from "./Timeline/Home/UserHome"
import QuestionTab from "./Timeline/Home/QuestionTab";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Timeline/Home/Profile";
import ChangePassword from "./Timeline/Home/ChangePassword";
import AllQuestion from "./Timeline/Home/AllQuestion";
import MyQuestion from "./Timeline/Home/MyQuestion";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/home" exact element={<UserHome />} />
        <Route path="/askanewquestion" exact element={<QuestionTab/>} />
        <Route path="/viewprofile" exact element={<Profile/>}/>
        <Route path="/changepassword" exact element={<ChangePassword/>}/>
        <Route path="/allquestion" exact element={<AllQuestion/>}/>
        <Route path="/myquestion" exact element={<MyQuestion/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
