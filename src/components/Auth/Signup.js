import { SiGnuprivacyguard } from "react-icons/si";
import "../../styles/login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from './../../contexts/AuthProviders';
import useTitle from "../TItle/useTitle.js";
// import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Signup = () => {

  const [userInfo, setUserInfo] = useState({email:"", password:""});
  const [errors, setErrors] = useState({email:"", password:"", generalError:""});
  // const [checked, setChecked] = useState(false)
  const { createUser, profileUpdate} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("SignUp")

  const handleSubmit = event =>{
    event.preventDefault()
    // const form = event.target;
    // const name = form.name.value;
    // const photoURL =form.photoURL.value;
    createUser(userInfo.email, userInfo.password)
    .then((result) =>{
      const createdUser = result.user;
      console.log(createdUser);
      setErrors({...errors, generalError:""});
      // updateProfile(name, photoURL)
      toast.success("Registration Successful")
      navigate(location.state?.from?.pathname || '/home', {replace:true})
    })
    .catch((error) =>{
      console.log(error)
      setErrors({...errors, generalError: error.message})
    })
  }

/*   const updateProfile = (name, photoURL) =>{
    const profile = {displayName: name, photoURL: photoURL}
    profileUpdate(profile)
    .then(() =>{
      setErrors({...errors, generalError:""});
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }
 */
  const handleEmail = event =>{
        const email = event.target.value;
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
          setErrors({...errors, email:"Please Enter a valid Email"})
          setUserInfo({...userInfo, email:""})
        }
        else{
          setErrors({...errors, email:""})
          setUserInfo({...userInfo,email:email});
        }
  }

  const handlePassword = event =>{
    const password = event.target.value;
    const lengthError = password.length <6;
      const noSymbolError = !/(?=.*[!@#$&*]){1,}/.test(password);
      const noCapitalLetterError = !/[A-Z]{1,}/.test(password);
      if(lengthError){
        setErrors({...errors, password: "Must be at least 6 characters"});
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


  return (
    <div className="login-container">
      <div className="login-title">Sign up <SiGnuprivacyguard /></div>
      <form onSubmit={handleSubmit} className="login-form">
        <input name="name" type="text" placeholder=" Your Full Name" required />
        {/* <input name="photoURL" type="text" placeholder="Photo URL" required /> */}
        <input onChange={handleEmail}  type="email" name="email" placeholder="Enter Email" required />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input onChange={handlePassword} type="password" placeholder=" password" />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <button>Sign up</button>
        {
          errors.generalError && <p className="text-red-500 ">{errors.generalError}</p>
        }
        <p className="my-4  font-serif">
          Already have an account? <Link className="text-blue-500" to="/login">Sign in here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
