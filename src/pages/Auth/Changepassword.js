import React from "react";
import "./Changepassword.css";

const ChangePassword = () => {
  return (
    <>
      <nav>
        <div className="changepsswrdnavbar">
          <p>Change Your Password</p>
        </div>
      </nav>
      <div className="passwordupdates">
        <input type="password" placeholder="Enter Old Password" />
        <input type="password" placeholder="Enter New Password" />
        <input type="password" placeholder="Confirm New Password" />
        <button>Submit</button>
      </div>
    </>
  );
};

export default ChangePassword;
