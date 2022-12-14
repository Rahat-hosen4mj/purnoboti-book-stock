import React from "react";
import "./Login.css";
import facebook from "../../../images/fb.png";
import google from "../../../images/gp.png";
import twiter from "../../../images/tw.png";
import banner from "../../../images/banner.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInError;
  if(gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  if(loading || gLoading){
    return <Loading />
  }
  // bookStock  KdPLJgGQLl6tjF96

  if(user || gUser) {
    navigate(from, { replace: true });
  }
  const handleLogin = async(event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password)
    console.log(email, password);
    event.target.reset();
  };
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)), url(${banner})`,
      }}
      className="hero"
    >
      <div className="form-box">
      <div className="text-center my-3">
            
            <h2 className='text-primary pt-3'>Social Sign In</h2>
         
        </div>
        <div className="social-icon">
          <img src={facebook} alt="" />
          <img onClick={() => signInWithGoogle()} src={google} alt="" />
          <img src={twiter} alt="" />
        </div>
        <form onSubmit={handleLogin} id="login" className="input-group">
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Your email.."
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
            New To The Page ?{" "}
            <Link to="/signup">Create an account</Link>
          </span>
          <input
            className="form-submit  rounded btn  btn-success py-2 mt-2 px-5"
            type="submit"
            value="Login"
          />{" "}
          <br />
        </form>
        {signInError}
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [
//       signInWithEmailAndPassword,
//       user,
//       loading,
//       error,
//     ] = useSignInWithEmailAndPassword(auth);

//   const navigate = useNavigate()

//   const handleEmailBlur = (event) =>{
//       setEmail(event.target.value)
//   };

//   const handlePasswordBlur = (event) =>{
//       setPassword(event.target.value)
//   };

//   if(user){
//       navigate('/shop')
//   }

//   const handleUserSignIn = event =>{
//       event.preventDefault();
//       signInWithEmailAndPassword(email, password)
//   }


// return (
//   <div className="form-container">
//     <div>
//       <h3 className="form-title">Login</h3>
//       <form onSubmit={handleUserSignIn}>
//         <div className="input-group">
//           <label htmlFor="email">Email</label>
//           <input onBlur={handleEmailBlur} type="email" name="email" required />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
//         </div>
//         <p style={{color : 'red'}}>{error?.message}</p>
//         {
//             loading && <p>Loading..</p>
//         }
//         <input className="form-submit" type="submit" value="Login" />
//       </form>
//       <p>New to Ema-John ? <Link  className="form-link" to='/signup'>Create an account</Link></p>
//     </div>
//   </div>
// );
// };
