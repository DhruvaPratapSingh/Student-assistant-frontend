import React, { useState } from "react";
import "./Addproduct.css";

const AddProduct = () => {
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [usedFor, setUsedFor] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleFileChange = (e) => {
    // Handle file change if needed
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          <p>Post Your Product</p>
        </div>
      </nav>

      <p className="addDetails">Add Details</p>
      <div className="details">
        <input
          type="text"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Used For"
          value={usedFor}
          onChange={(e) => setUsedFor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Original Price"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
        <textarea
          placeholder="Product Description"
          id="prodDescp"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        ></textarea>
      </div>

      <p className="addImage">Add Image</p>
      <div className="image">
        <div className="add">
          <label htmlFor="imageInput">+</label>
          <input
            type="file"
            id="imageInput"
            style={{ visibility: "hidden" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
