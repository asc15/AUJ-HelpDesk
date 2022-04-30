import "../../Authentication/Common/Common.css";
import LeftContainer from "../Common/LeftContainer";
import { Header, Footer } from "../../Authentication/Common/LeftContainer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-accessible-accordion/dist/fancy-example.css";
import Services from "../../service/Services";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {  useNavigate } from "react-router-dom";

export default function MyQuestion() {
  let [allQuestion, setAllQuestion] = useState([]);
  let isMounted = true;
  let [userResponse, setUserResponse] = useState("");

  const navigate = useNavigate();
  const getData = () => {
    const userId = sessionStorage.getItem("id");
    Services.getMyQuestions(userId).then((res) => {
      if (isMounted) {
        console.log(res.data);
        setAllQuestion(res.data);
      }
    });
  };
  useEffect(() => {
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

  const submitAnswerHandler = (qid) => {
    console.log(qid);
    console.log(userResponse);
    const uid = sessionStorage.getItem("id");
    const name = sessionStorage.getItem("name");
    const dept = sessionStorage.getItem("department");
    const role = sessionStorage.getItem("role");
    const date = new Date();
    const today =
      date.getDay() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " at " +
      date.getHours() +
      ":" +
      date.getMinutes();
    const answerObj = {
      userId: uid,
      userName: name,
      userDepartment: dept,
      userRole: role,
      ansDate: today,
      answer: userResponse,
      quesion_id: qid,
    };
    Services.answerQuestion(uid, qid, answerObj).then((res) => {
    
      navigate("/home", { state: { message: res.data } });
      console.log(res.data);
    });
  };

  const submitUpdateQuestionHandler = (qid) => {
    console.log(qid);
    console.log(userResponse);
    const uid = sessionStorage.getItem("id");
    Services.updateQuestion(uid, qid, userResponse).then((res) => {
      console.log(res.data);

      navigate("/home", { state: { message: res.data } });
    });
  };

  const submitDeleteQuestionHandler = (qid) => {
    console.log(qid);
    console.log(userResponse);
    const uid = sessionStorage.getItem("id");
    Services.deleteQuestion(uid, qid).then((res) => {
      console.log(res.data);
      navigate("/home", { state: { message: res.data } });
    });
  };
  return (
    <>
      <Header />
      <LeftContainer />
      <ToastContainer />
      <div className="right-question-div">
        <Accordion allowZeroExpanded>
          {allQuestion.map((question) => (
            <AccordionItem key={question.id}>
              <Accordion>
                <AccordionItemHeading>
                  <AccordionItemButton>{question.question}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion__panel-cstm ">
                  <div className="detail-heading">
                    <u>Asked By</u>
                  </div>
                  <div className="detail">{question.userName}</div>
                  <div className="detail">
                    {question.userRole} - {question.userDepartment}
                  </div>
                  <div className="detail">On {question.quesDate}</div>
                  <hr />
                  <div>
                    {question.answers.map((answer) => (
                      <AccordionItemPanel
                        className="accordion__panel-cstm "
                        key={answer.id}
                      >
                        <div> {answer.answer}</div>

                        <div className="detail-heading">
                          <u>Answerd By</u>
                        </div>
                        <div className="detail">{answer.userName}</div>
                        <div className="detail">
                          {answer.userRole} - {answer.userDepartment}
                        </div>
                        <div className="detail">On {answer.ansDate}</div>
                        <hr />

                        <div></div>
                      </AccordionItemPanel>
                    ))}
                  </div>
                </AccordionItemPanel>
              </Accordion>
              <Accordion className="">
                <AccordionItemHeading className="a-inline-block">
                  <AccordionItemButton className="accordion__button-btn ">
                    Answer/Update/Delete
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="answering-div">
                    <form className="answer-form">
                      <div>
                        {" "}
                        <textarea
                          className="ans-box"
                          onChange={(e) => setUserResponse(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="btn-cntrl">
                        <button
                          className="ans-btn"
                          value={question.qid}
                          onClick={(e) => {
                            e.preventDefault();
                            submitAnswerHandler(question.id);
                          }}
                        >
                          Answer Question
                        </button>
                      </div>{" "}
                      <div className="btn-cntrl">
                        <button
                          className="edit-btn"
                          value={question.qid}
                          onClick={(e) => {
                            e.preventDefault();
                            submitUpdateQuestionHandler(question.id);
                          }}
                        >
                          Edit Question
                        </button>{" "}
                      </div>
                      <div className="btn-cntrl">
                        <button
                          className="delete-btn"
                          value={question.qid}
                          onClick={(e) => {
                            e.preventDefault();
                            submitDeleteQuestionHandler(question.id);
                          }}
                        >
                          Delete Question
                        </button>{" "}
                      </div>
                    </form>
                  </div>
                </AccordionItemPanel>
              </Accordion>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Footer />
    </>
  );
}
