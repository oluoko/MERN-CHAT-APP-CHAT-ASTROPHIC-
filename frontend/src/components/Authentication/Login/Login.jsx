import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {};

  const submitHandler = () => {};
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container w-40 p-5 rounded bg-white ">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label className="custom-control-label ms-2" htmlFor="check">
              Remember Me
            </label>
          </div>
          <div className="d-grid mb-3">
            <button className="btn btn-primary" onClick={submitHandler}>
              Sign In
            </button>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-danger"
              onClick={() => {
                setEmail("guest@example.com");
                setPassword("123456");
              }}
            >
              Guest Login
            </button>
          </div>
          <p className="mt-3 d-flex ">
            <a href="/#" className="">
              Forgot Password?
            </a>
            <Link to="/signup" className="ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
