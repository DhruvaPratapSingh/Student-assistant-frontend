import React, { useState } from "react";
import "./Login.css";
import { notifications } from "@mantine/notifications";
import STUDENT_ASSISTANT_IMG from "../../assets/studentass1.png";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();

    if (userDetails.email === "" || userDetails.password === "") {
      notifications.show({
        title: "Error",
        message: "Email and password is required",
        color: "red",
      });
    }

    authService
      .login(userDetails.email, userDetails.password)
      .then((response) => {
        if (response.statusCode === 200) {
          notifications.show({
            title: "Success",
            message: "user login succussfully",
            color: "green",
          });
          navigate("/home");
        } else if (response.statusCode === 401) {
          notifications.show({
            title: "Error",
            message: "password Invalid",
            color: "red",
          });
        } else if (response.statusCode === 404) {
          notifications.show({
            title: "Error",
            message: "Register yourself first",
            color: "red",
          });
          navigate("/signup");
        }
      });
  };
  return (
    <div>
      <p className="ssistant">ssistant</p>
      <div className="purple_rect">
        <p>Student A</p>
      </div>
      <div className="rect2">
        <p className="login">Login</p>
        <form>
          <input
            type="text"
            placeholder="Enter Email"
            value={userDetails.email}
            onChange={(event) => {
              setUserDetails({
                ...userDetails,
                email: event.currentTarget.value,
              });
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={userDetails.password}
            onChange={(event) => {
              setUserDetails({
                ...userDetails,
                password: event.currentTarget.value,
              });
            }}
          />
          <div className="forgot">
            <p>Forgot Password?</p>
            <p id="clickhere">Click Here</p>
          </div>

          <button className="signupbtn">
            <a href="/signup">Signup</a>
          </button>

          <button
            type="submit"
            className="loginbtn"
            onClick={(event) => {
              handleLogin(event);
            }}
          >
            Login
          </button>
        </form>
      </div>
      <div className="stud_img"></div>
    </div>
  );
};

export default Login;
