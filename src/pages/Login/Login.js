import { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
// import "./Login.scss";
export default function Login() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // prevent default
    event.preventDefault();

    // POST request to login with username/password
    axios
      .post("http://localhost:8080/user/login", {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then(({ data }) => {
        console.log(data);
        setError(undefined);
        // store the token from the server
        localStorage.authToken = data.token;

        if (data.user.helper) {
          navigate("/helper");
        } 
        if(data.user.employer)
        { navigate("/employer");}
        else {
          navigate("/immigrant");
        }
      })
      .catch((error) => {
        // if it failed?! do something
        setError(`Login failed: ${error}`);
      });
  };

  return (
    <><Navigation></Navigation>
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>

        <label className="login__label">Username:</label>
        <input className="login__input"  type="text" name="username" />

        <label className="login__label">Password:</label>
        <input  className="login__input" type="password" name="password" />

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">Log in</button>
      </form>
    </main>
    </>
  );
}
