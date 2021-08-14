import React from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/category">
              Create Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/product">
              Create Product
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Administrator" : "Client"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Container>
      <Row className=" mt-5">
        <Col lg={4} xs={12}>{adminLinks()}</Col>
        <Col lg={8}  xs={12}>{adminInfo()}</Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
