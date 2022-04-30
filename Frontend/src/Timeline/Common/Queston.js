import React from "react";
import "./Common.css";
export default function Question() {
  return (
    <div className="right">
      <form className="question-form">
        <label htmlFor="questions" className="ask-lable">
          Ask a Question?
        </label>
        <textarea className="question-box" />
        <p>
          Note : The following question/query would be visible to the target
          audiance only.
        </p>
        <p>target audiance</p>
        <label className="container">
          One
          <input type="radio" checked="checked" name="radio" />
          <span className="checkmark"></span>
        </label>
        <br />
        <label className="container">
          Two
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>{" "}
        <br /> <br />
        <button type="submit" className="submit-form-btn">
          Post Question
        </button>
      </form>
    </div>
  );
}
