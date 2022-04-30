import LeftContainer from "../Common/LeftContainer";
import "../Common/Common.css";
import { Header, Footer } from "../../Authentication/Common/LeftContainer";
import { useState } from "react";
import { toast ,ToastContainer} from "react-toastify";
import Services from "../../service/Services";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function QuestionTab() {
  let [questionFor, setQuestionFor] = useState("");
  let [question, setQuestion] = useState("");
  const navigate=useNavigate();
  const submitQuestionHandler = (e) => {
    e.preventDefault();
    if (question === "" && questionFor === "") {
      toast.warn("Please enter all fields.");
    } else if (questionFor === "") {
      toast.warn("Choose target audiance");
    } else if (question === "") {
      toast.warn("Please Write a question!");
    } else {
      const uid = sessionStorage.getItem("id");
      const name = sessionStorage.getItem("name");
      const dept=sessionStorage.getItem("department")
      const role=sessionStorage.getItem("role")
      const date = new Date();
      const today =
        date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() +
        " at " +
        date.getHours() +
        ":" +
        date.getMinutes();
      const askQuestion = {
        "userId": uid,
        "userName": name,
        "userDepartment":dept,
        "userRole":role,
        "questionFor": questionFor,
        "quesDate": today,
        "question": question,
      };
   Services.postQuestion(askQuestion, uid)
        .then((res) => {
          toast.success(res.data)
          navigate('/home',{state:{message:res.data}})
        })
        .catch((error) => {
          console.log(error);
        });
        
      console.log(question);
      console.log(questionFor);
    }
  };
  return (
    <>
      <Header />
      <LeftContainer />
      
      <div className="right"> <ToastContainer/>
        <div className="qna-section">
          <form className="question-form">
            <label htmlFor="questions" className="ask-lable">
              Ask a Question?
            </label>
            <div className="inputContainer">
              <textarea
                className="question-box"
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <p>
              Note : The following question/query would be visible to the target
              audiance only.
            </p>
            <p>Target Audiance</p>
            <div className="inputContainer">
              <input
                type="radio"
                value="Student"
                name="role"
                onClick={(e) => setQuestionFor(e.target.value)}
              />{" "}
              Student
              <input
                type="radio"
                value="Teacher"
                name="role"
                onClick={(e) => setQuestionFor(e.target.value)}
              />{" "}
              Teacher
            </div>
            <br /> <br />
            <button
              type="submit"
              className="submit-q-btn"
              onClick={submitQuestionHandler}
            >
              Post Question
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default QuestionTab;
