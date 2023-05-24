import "./Register.scss";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <p>
            Welcome to our vibrant social media community! Join us and connect
            with friends, family, and like-minded individuals from around the
            world. Engage in lively discussions, explore trending topics, and
            stay up to date with the latest news. Our platform is designed to
            keep you informed and entertained.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Full Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
