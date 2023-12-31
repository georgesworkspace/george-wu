import { useState } from "react";
// import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpEmployer.scss"
import Navigation from "./Navigation";
export default function SignUpEmployer() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // prevent default
    event.preventDefault();

    // POST request to login with username/password
    axios
      .post("http://localhost:8080/user/signupemployer", {
        username: event.target.username.value,
        password: event.target.password.value,
        companycontact: event.target.contact.value,
        companylocation: event.target.location.value,
        companydescription: event.target.description.value,
        companyname: event.target.name.value,
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
        <h1 className="login__title">SignUp -- Employer</h1>

        <label className="login__label">Username:</label>
        <input type="text" name="username" className="login__input"/>

        <label  className="login__label">Password:</label>
        <input type="password" name="password"className="login__input" />

        <label  className="login__label">Name:</label>
        <input type="text" name="name" className="login__input"/>

        <label  className="login__label">Location:</label>
        <input type="text" name="location" className="login__input"/>

        <label  className="login__label">Description:</label>
        <input type="text" name="description" className="login__description"/>
        <label  className="login__label">Contact:</label>
        <input type="text" name="contact" className="login__input"/>

        {error && <div className="login__message">{error}</div>}

        <button className="login__button">Sign up</button>
      </form>
    </main>
    </>
  );
}
