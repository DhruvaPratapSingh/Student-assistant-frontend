import React from "react";
import "./Login.css";
import STUDENT_ASSISTANT_IMG from "../../assets/studentass1.png";

const Login = () => {
  return (
    <div>
      <header>
        <h1 className="ssistant">ssistant</h1>
      </header>
      <div className="purple_rect">
        <p>Student A</p>
      </div>
      <section className="rect2">
        <p className="login">Login</p>
        <form action="/login" method="post">
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <div className="forgot">
            <p>Forgot Password?</p>
            <p id="clickhere">Click Here</p>
          </div>
          <a href="/signup">
            <button className="signupbtn">Signup</button>
          </a>
          <button type="submit" className="loginbtn">
            Login
          </button>
        </form>
      </section>
      <div
        className="stud_img"
        style={{ backgroundImage: `url(${STUDENT_ASSISTANT_IMG})` }}
      >
        <img src={STUDENT_ASSISTANT_IMG} alt="" />
      </div>
    </div>
  );
};

export default Login;
