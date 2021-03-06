import React from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

const UserDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/profile/update">
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
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

  const purchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">history</li>
        </ul>
      </div>
    );
  };
  return (
    <Container>
      <Row className="mt-2">
        <Col lg={4} xs={12}>{userLinks()}</Col>
        <Col lg={8} xs={12}>{userInfo()}</Col>
        <Col lg>{purchaseHistory()}</Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
