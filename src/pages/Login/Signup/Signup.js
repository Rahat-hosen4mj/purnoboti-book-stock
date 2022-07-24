import React from 'react';
import facebook from "../../../images/fb.png";
import google from "../../../images/gp.png";
import twiter from "../../../images/tw.png";
import banner from "../../../images/banner.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        event.target.reset();
      };
    return (
        <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)), url(${banner})`,
        }}
        className="hero"
      >
        <div id='signUp-formBox' className="form-box">
          <div className="text-center my-3">
            <button type="button" className="btn btn-success ">
              Social Sign In
            </button>
          </div>
          <div className="social-icon">
            <img src={facebook} alt="" />
            <img src={google} alt="" />
            <img src={twiter} alt="" />
          </div>
          <form onSubmit={handleLogin} id="login" className="input-group">
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Your name.."
            />
             <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Your mail.."
            />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Enter password"
            />
            <div>
              <input type="checkbox" className="check-box" />
              <span>Accept Terms and Condituin</span>
            </div>
            <span>
              Already have an Account ?{" "}
              <Link to="/login">Please Login</Link>
            </span>
            <input
              className="form-submit btn rounded btn-success py-2 mt-2 px-5"
              type="submit"
              value="Signup"
            />{" "}
            <br />
          </form>
        </div>
  
       
      </div>
    );
};

export default Signup;