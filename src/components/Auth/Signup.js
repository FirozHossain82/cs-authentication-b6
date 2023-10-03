import { SiGnuprivacyguard } from "react-icons/si";
import "../../styles/login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-title">Sign up <SiGnuprivacyguard /></div>
      <form className="login-form">
        <input name="name" type="text" placeholder=" Your Full Name" required />
        {/* <input name="photoURL" type="text" placeholder="Photo URL" required /> */}
        <input  type="email" name="email" placeholder="Enter Email" required />

        <input type="password" placeholder=" password" />

        <button>Sign up</button>
        <p className="my-4  font-serif">
          Already have an account? <Link className="text-blue-500" to="/login">Sign in here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
