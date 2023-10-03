import React, { useContext, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { AuthContext } from "../../contexts/AuthProviders.js";
import toast from "react-hot-toast";
import useTitle from "../TItle/useTitle.js";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    generalError: "",
  });
  const { gitHubSignIn, googleSignIn, logInWithEmailPassword, passwordReset } =
    useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/home";


    const handleSubmit = (event) =>{
      event.preventDefault();
      logInWithEmailPassword(userInfo.email, userInfo.password)
      .then((result )=>{
        console.log(result.user);
        event.target.reset();
        toast.success('login successful')
        navigate(from,{replace:true})
      })
      .catch((error) =>{
        console.log(error)
        setErrors({...errors, generalError:error.message})
      })
    }
    const handleEmail = event =>{
      const email = event.target.value;
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
          setErrors({...errors, email:"Please Provide a valid email"});
          setUserInfo({...userInfo, email:email});
      }else{
        setErrors({...errors, email: ""});
        setUserInfo({...userInfo, email:email});
      }
    }

    const handlePassword = event =>{
      const password = event.target.value;
      const lengthError = password.length < 8;
      const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
      const noCapitalLetterError = !/[A-Z]{1,}/.test(password);
      if(lengthError){
        setErrors({...errors, password: "Must be at least 8 characters"});
        setUserInfo({...userInfo, password:""})
      }else if(noSymbolError){
        setErrors({...errors, password:"Password must be a one Special character"});
        setUserInfo({...userInfo, password:""});
      }else if(noCapitalLetterError){
        setErrors({...errors, password:"Password at least one Capital letter"});
        setUserInfo({...userInfo, password:""});
      }else {
        setErrors({ ...errors, password: "" });
        setUserInfo({ ...userInfo, password:password  });
      }
    }
    const handleGoogleSignIn = () =>{
      googleSignIn()
      .then((result) =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('login successful')
        navigate(location.state?.from?.pathname || "/")
        setErrors({...errors, generalError:""})
      })
      .catch((error) =>{
        console.log(error)
        setErrors({...errors, generalError:error.message})
      })
    }

    const handleGithubSignIn = () =>{
      gitHubSignIn()
      .then((result) =>{
        const githubUser = result.user;
        console.log(githubUser);
        toast.success('github  login successful')
        setErrors({...errors, generalError:""})
        navigate(location.state?.from?.pathname || "/")
      })
      .catch((error) =>{
        console.log(error)
        setErrors({...errors, generalError: error.message})
      })
    }

    const handleResetPassword = () =>{
      passwordReset(userInfo.email)
      .then(() =>{
        toast.success("check your inbox/spam to reset!")
      })
      .catch((error) =>{
        console.error(error);
      })
    }
   useTitle("Login");
  return (
    <div className="login-container mt-20">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <input onChange={handleEmail} type="email" placeholder="Your Email" />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input onChange={handlePassword} type="password" placeholder="password" />
        {errors.password && <p className="error-message">{errors.message}</p>}
        {/* <small>Forgot your password?<button onClick={handleResetPassword} variant="link">ResetNow</button></small> */}
        <button>Login</button>
        {/* {
          errors.generalError && <p className="text-red-500" >{errors.generalError}</p>
        } */}
        <p className="mt-4">
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button onClick={ handleGoogleSignIn}>Sign in With Google</button>
      <button>Sign in With Github</button>
    </div>
  );
};

export default Login;
