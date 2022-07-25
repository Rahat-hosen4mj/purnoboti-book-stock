import React from 'react';
import facebook from "../../../images/fb.png";
import google from "../../../images/gp.png";
import twiter from "../../../images/tw.png";
import banner from "../../../images/banner.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
import {
 
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
 
} from "react-firebase-hooks/auth";
import Loading from '../../Shared/Loading';

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
 
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInError;
  if ( error || gError || updateError) {
    signInError = (
      <p className="text-danger fs-5 pt-3">
        <small>{gError?.message}</small>
      </p>
    );
  }
 
  if (loading || gLoading || updating) {
    return <Loading />;
  }


   if(user || gUser){
    navigate(from, { replace: true });
   }

    const handleLogin = async(event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName :name });
        console.log("update done");
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
            
              <h2 className='text-primary pt-3'>Social Sign In</h2>
           
          </div>
          <div className="social-icon" >
            <img src={facebook} alt="" />
            <img onClick={() => signInWithGoogle()} src={google} alt="" />
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
          {signInError}
        </div>
        
       
      </div>
    );
};

export default Signup;