import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { API_URL } from "../../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { user: { email: email, password: password } };
    fetch(`${API_URL}/users/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (
        res.ok &&
        signIn({
          token: res.headers.get("authorization").split(" ")[1],
          expiresIn: 20160,
          tokenType: "Bearer",
          authState: { greeting: "Hello there!" },
        })
      ) {
        navigate("/");
      } else {
        setErrors(["Invalid email or password!"]);
      }
    });
  };

  return (
    <form className="login-form">
      <h2>Login</h2>

      {errors && (
        <div className="form-errors">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
      <div className="form-value">
        <label className="login-form-label" htmlFor="email">
          Email
        </label>
        <input
          className="login-form-text-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-value">
        <label className="login-form-label" htmlFor="password">
          Password
        </label>
        <input
          className="login-form-text-input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <button className="login-button" onClick={handleSubmit}>
        Log in
      </button>

      <Link to="/register" className="alternative-method-link">
        You don't have an account?!
      </Link>
    </form>
  );
};

export default Login;
