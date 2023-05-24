import { useContext } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
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
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
