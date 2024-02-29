import React, { useState } from "react";
import "./Addproduct.css";
import productService from "../../services/product.service";
import { notifications } from "@mantine/notifications";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    productService
      .addProduct(
        productDetails.name,
        productDetails.price,
        productDetails.title,
        productDetails.description,
        file
      )
      .then((response) => {
        if (response.statusCode === 200) {
          notifications.show({
            title: "success",
            message: "Product registered successfully",
            color: "green",
          });
        }
      })
      .catch((error) => {
        console.error("Error sending API request:", error);
      });
  };

  const handleFileChange = (event) => {
    const uploadedfile = event.target.files[0];
    setFile(uploadedfile);
  };

  return (
    <div>
      <nav>
        <div className="navbar1">
          <p>Post Your Product</p>
        </div>
      </nav>

      <p className="addImage">Add Image</p>
      <div className="image">
        <div className="add">
          <label htmlFor="imageInput">+</label>
          <input
            type="file"
            id="imageInput"
            className="imageInput"
            style={{ visibility: "hidden" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          {/* will be implmented in future -- preview functionality on file upload
          failing when there is not file */}
          {/* <img src={URL.createObjectURL(file)} alt="" /> */}
        </div>
      </div>

      <p className="addDetails">Add Details</p>
      <div className="details">
        <input
          type="text"
          placeholder="Enter name"
          value={productDetails.name}
          onChange={(e) => {
            setProductDetails({
              ...productDetails,
              name: e.currentTarget.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Enter Price"
          value={productDetails.price}
          onChange={(e) => {
            setProductDetails({
              ...productDetails,
              price: e.currentTarget.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Enter Product Title"
          value={productDetails.title}
          onChange={(e) => {
            setProductDetails({
              ...productDetails,
              title: e.currentTarget.value,
            });
          }}
        />
        <textarea
          placeholder="Product Description"
          className="prodDescp1"
          value={productDetails.description}
          onChange={(e) => {
            setProductDetails({
              ...productDetails,
              description: e.currentTarget.value,
            });
          }}
        ></textarea>

        <button
          className="submitbtn"
          onClick={(event) => {
            handleSubmit(event);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
