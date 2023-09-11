import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { API_URL } from "../../constants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();
  const signIn = useSignIn();

  const passwordMatching = () => {
    return password === passwordConfirmation;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordMatching()) {
      const user = {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
      };
      fetch(API_URL + "/users", {
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
    } else {
      console.log("Well passwords don't match :D");
    }
  };

  return (
    <form className="login-form">
      <h2>Register</h2>

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

      <div className="form-value">
        <label className="login-form-label" htmlFor="password">
          Password Confirmation
        </label>
        <input
          className="login-form-text-input"
          type="password"
          id="password-confirmation"
          name="password-confirmation"
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
            passwordMatching();
          }}
        />
      </div>

      <button className="login-button" onClick={handleSubmit}>
        Sign up
      </button>

      <Link to="/login" className="alternative-method-link">
        You already have an account?
      </Link>
    </form>
  );
};

export default Register;
