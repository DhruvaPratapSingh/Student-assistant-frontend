import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="profilenavbar">
          <div className="usernamelogo">
            <p>User Name</p>
          </div>
        </div>
        <div className="profilepanel">
          <div className="back2home">
            <i className="fas fa-house"></i>
            <p>
              {" "}
              <a href="/home"> Back to Home </a>
            </p>
          </div>
          <div className="changepasswordoption">
            <p>
              {" "}
              <a href="/changepassword"> Change Password </a>
            </p>
            <a href="/changepassword">
              {" "}
              <i className="fas fa-key"></i>
            </a>
          </div>
        </div>
      </nav>
      <main>
        <p className="Myproducts">My Products</p>
        <div className="cards-container">
          <div className="card">
            <div className="cardimg">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Product Image"
              />
            </div>
            <div className="cardcontent">
              <p id="productcost">Rs. 100</p>
              <p id="producttitle">Product Title</p>
              <p className="parameters">Used For:</p>
              <p id="usedfor">2 years</p>
              <p className="parameters">Original Cost:</p>
              <p id="originalcost"> Rs. 500</p>
              <p className="parameters">Product Description:</p>
              <p id="prodDescp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className="cardactions">
              <p>Edit Details</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footpanel">
          <a href="#">Back To Top</a>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
