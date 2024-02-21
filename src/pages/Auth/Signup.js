import React from "react";
import STUDENT_ASSISTANT_IMG from "../../assets/studentass1.png";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
     
        <p className="ssistant">ssistant</p>
  
      <div className="purple_rect">
        <p>Student A</p>
      </div>
      <div className="rect2">
        <p className="signup">SignUp</p>
        <form action="/signup" method="post">
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter Email" />
          <input type="text" placeholder="Enter UserName" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit" className="submitbtn">
            Submit
          </button>
          <button className="loginbtn2"><a href="/">Login</a></button>
        </form>
      </div>
      <div
        className="stud_img">
      </div>
    </div>
  );
};

export default Signup;
