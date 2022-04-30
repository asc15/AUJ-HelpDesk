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
import { Navigate, useNavigate } from "react-router-dom";

export default function AllQuestion() {
  const [allQuestion, setAllQuestion] = useState([]);
  let isMounted = true;
  const [userAnswer, setUserAnswer] = useState("");
  const[ansObj,setAnsObj]=useState({})
  const navigate = useNavigate();
  const getData = () => {
    const userId = sessionStorage.getItem("id");
    Services.getAllQuestions(userId).then((res) => {
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
    console.log(userAnswer);
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
      answer: userAnswer,
      quesion_id: qid,
    };
    setAnsObj(answerObj)
    Services.answerQuestion(uid, qid, answerObj).then((res) => {
      navigate('/home',{state:{message:res.data}})
      console.log(res.data);
    });
  };

  return (
    <>
      <Header />
      <LeftContainer />
      <ToastContainer/>
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
                        <div > {answer.answer}</div>

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
                    Answer This Question
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="answering-div">
                    <form className="answer-form">
                      <div>
                        {" "}
                        <textarea
                          className="ans-box"
                          onChange={(e) => setUserAnswer(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className="ans-btn"
                          value={question.qid}
                          onClick={(e) => {
                            e.preventDefault();
                            submitAnswerHandler(question.id);
                          }}
                        >
                          Answer
                        </button>
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
