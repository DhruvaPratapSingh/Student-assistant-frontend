import React, { useState } from "react";
import STUDENT_ASSISTANT_IMG from "../../assets/studentass1.png";
import { notifications } from "@mantine/notifications";
import "./Signup.css";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    if (
      userDetails.username === "" ||
      userDetails.email === "" ||
      userDetails.password === "" ||
      userDetails.fullname === ""
    ) {
      notifications.show({
        title: "Error",
        message: "Please fill all the required details.",
        color: "red",
      });
      console.log("notifications");
      return;
    }

    authService
      .register(
        userDetails.username,
        userDetails.fullname,
        userDetails.email,
        userDetails.password
      )
      .then((response) => {
        console.log(response);
        if (response.statusCode === 200) {
          notifications.show({
            title: "success",
            message: "user registered successfully",
            color: "green",
          });
          navigate("/");
        } else if (response.statusCode === 400) {
          notifications.show({
            title: "Error",
            message: "Please provide all the required details.",
            color: "red",
          });
        } else if (response.statusCode === 409) {
          notifications.show({
            title: "success",
            message: "you are already registered",
            color: "yellow",
          });
        }
      });
  };

  return (
    <div>
      <header>
        <p className="ssistant">ssistant</p>
      </header>
      <div className="purple_rect">
        <p>Student A</p>
      </div>
      <section className="rect2">
        <p className="signup">SignUp</p>
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            size="md"
            value={userDetails.fullname}
            onChange={(event) => {
              setUserDetails({
                ...userDetails,
                fullname: event.currentTarget.value,
              });
            }}
          />
          <input
            type="text"
            placeholder="Enter Email"
            size="md"
            value={userDetails.email}
            onChange={(event) => {
              setUserDetails({
                ...userDetails,
                email: event.currentTarget.value,
              });
            }}
          />
          <input
            type="text"
            placeholder="Enter Username"
            size="md"
            value={userDetails.username}
            onChange={(event) => {
              setUserDetails({
                ...userDetails,
                username: event.currentTarget.value,
              });
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            size="md"
            value={userDetails.password}
            onChange={(event) => {
              setUserDetails({
                ...userDetails,
                password: event.currentTarget.value,
              });
            }}
          />
          <button
            type="button"
            className="submitbtn"
            onClick={(event) => {
              handleSignUp(event);
            }}
          >
            Submit
          </button>
          <button className="loginbtn2">
            <a href="/">Login</a>
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
