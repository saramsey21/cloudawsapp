import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./login";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("firstName", JSON.stringify(firstName));
      localStorage.setItem("lastName", JSON.stringify(lastName));
      localStorage.setItem("sarahEmail", JSON.stringify(email));
      localStorage.setItem(
        "sarahPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  fname="fname"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  lname="lname"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Registered?{" "}Login!
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  Fill in these fields yo!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Signup;