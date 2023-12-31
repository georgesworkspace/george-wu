import { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpImmigrants.scss"
import Navigation from "../Navigation";
// import "./SignUpImmigrants.scss";
export default function SignUpImmigrant() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // prevent default
    event.preventDefault();

    // POST request to login with username/password
    axios
      .post("http://localhost:8080/user/signup", {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((response) => {
        console.log(response);

        navigate("/login");
      })
      .catch((error) => {
        // if it failed?! do something
        setError(`Login failed: ${error}`);
      });
  };

  return (
    <>
    <Navigation></Navigation>
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">SignUp -- Immigrant</h1>

        <label className="login__label">Username:</label>
        <input type="text" name="username" className="login__input"/>

        <label className="login__label">Password:</label>
        <input type="password" name="password" className="login__input"/>

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">Sign up</button>
      </form>
    </main>
    </>
  );
}
