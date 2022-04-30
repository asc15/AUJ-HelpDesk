import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
export default function AskTab() {
  return (
    <div className="right">
    <Link to='/askanewquestion'><button className="ask">Ask a question</button></Link>
    </div>
  );
}
