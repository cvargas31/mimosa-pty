import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { createProduct } from "./apiAdmin";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  const { user, token } = isAuthenticated();

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.file[0] : event.target.value;
    formData.set(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clickSubmit = (e) => {
    
  }

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          />
        </label>
      </div>
      <div className="form-group">
        <labe>Name</labe>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          onChange={handleChange("description")}
          className="form-control"
          value={description}
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          onChange={handleChange("price")}
          className="form-control"
          value={price}
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select onChange={handleChange("category")} className="form-control">
          <option value="6111fea352bae70dff290768">Collares</option>
          <option value="6111ffa400ad2f0e1cd91efd">Tobilleras</option>
        </select>
      </div>
      <div className="form-group">
        <label>Shipping</label>
        <select onChange={handleChange("category")} className="form-control">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <div className="form-group">
        <labe className="text-muted">Quantity</labe>
        <input
          onChange={handleChange("quantity")}
          type="number"
          className="form-control"
          value={quantity}
        />
      </div>
      <button className="btn btn-primary mt-2"> Create Product</button>
    </form>
  );
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">...</div>
      {newPostForm()}
    </div>
  );
};

export default AddProduct;
