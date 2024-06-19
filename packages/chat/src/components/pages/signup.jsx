// import { useState } from "react";

import { authController } from "../../services/api/auth/controller";

export const SignupPage = () => {
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      elements: {
        login: { value: loginValue },
        password: { value: passwordValue },
        firstName: { value: firstNameValue },
        secondName: { value: secondNameValue },
        email: { value: emailValue },
        phone: { value: phoneValue },
      },
    } = e.target;
    authController.signup({
      login: loginValue,
      password: passwordValue,
      first_name: firstNameValue,
      second_name: secondNameValue,
      email: emailValue,
      phone: phoneValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="main-form">
        <h1 className="main-form_header">Signup</h1>
        <label htmlFor="login">Login</label>
        <input id="login" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        <label htmlFor="firstName">First name</label>
        <input id="firstName" />
        <label htmlFor="secondName">Second name</label>
        <input id="secondName" />
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="phone">Phone</label>
        <input id="phone" />
        <button className="button">Signup</button>
      </form>
    </div>
  );
};
