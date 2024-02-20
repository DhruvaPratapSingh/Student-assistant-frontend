import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <p>HBTU-KART</p>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="nav-search">
            <input placeholder="Search Products" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <button className="sellbtn">Sell Item</button>
          <div className="profile">
            <i className="fa-solid fa-user"></i>
            <p>My Profile</p>
          </div>
        </div>
        <div className="panel">
          <div className="back2home">
            <i className="fa-solid fa-house"></i>
            <p>
              <a href="navigatepage.html">Back to Home</a>
            </p>
          </div>
          <div className="menu">
            <div className="wishlist">
              <i className="fa-solid fa-heart"></i>
              <p>Wishlist</p>
            </div>
            <div className="mycart">
              <i className="fa-solid fa-basket-shopping"></i>
              <p>My Cart</p>
            </div>
            <div className="contactus">
              <i className="fa-solid fa-phone"></i>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="logout">
            <p>Log out</p>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
        </div>
      </nav>

      <main>
        <div className="cards-container">
          {/* You can map through your data and render the product cards here */}
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
              <p id="usedfor">2 years</p>
              <p id="prodDescp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
          </div>
          {/* Add more cards as needed */}
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

export default Home;