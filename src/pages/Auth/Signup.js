import React from "react";
import STUDENT_ASSISTANT_IMG from "../../assets/studentass1.png";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <header>
        <h1 className="ssistant">ssistant</h1>
      </header>
      <div className="purple_rect">
        <p>Student A</p>
      </div>
      <section className="rect2">
        <p className="signup">SignUp</p>
        <form action="/signup" method="post">
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit" className="signupbtn">
            Signup
          </button>
        </form>
      </section>
      <div
        className="stud_img"
        style={{ backgroundImage: `url(${STUDENT_ASSISTANT_IMG})` }}
      >
        {/* ... */}
      </div>
    </div>
  );
};

export default Signup;
