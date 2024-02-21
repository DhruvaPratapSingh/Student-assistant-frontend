import React from "react";
import "./Login.css";
import STUDENT_ASSISTANT_IMG from "../../assets/studentass1.png";

const Login = () => {
  return (
    <div>
      <p className="ssistant">ssistant</p>
      <div className="purple_rect">
        <p>Student A</p>
      </div>
      <div className="rect2">
        <p className="login">Login</p>
        <form action="/login" method="post">
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <div className="forgot">
            <p>Forgot Password?</p>
            <p id="clickhere">Click Here</p>
          </div>
          
          <button className="signupbtn"><a href="/signup">Signup</a></button>
    
          <button type="submit" className="loginbtn">
            Login
          </button>
        </form>
      </div>
      <div className="stud_img">
        
      </div>
    </div>
  );
};

export default Login;
