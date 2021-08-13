import React, {useState} from 'react'
import { signin,authenticate } from '../auth'
import {Redirect} from 'react-router-dom'


const Signin = () => {


  const [values, setValues] = useState({
    email: "kishardo@gmail.com",
    password: "rrrrrrr8",
    error: "",
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, error, loading, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

 

  const clickSubmit = (event) => {
    event.preventDefault();
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
        });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
  
          });
        })
      }
    });
  };

  const signUpForm = () => (
    <form className="container col-md-8 offset-md-2 mt-5">
      <div className="form-group">
        <label className="text-muted">email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () => (
    
    loading && <div className="alert alert-info">
      <h2>Loading...</h2>
    </div>
  );

  const redirectUser = () => {
    if(redirectToReferrer){
      return <Redirect to="/" />
    }
  }

  return (
    <div>
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </div>
  );
}

export default Signin
