// import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { authController } from "../../services/api/auth/controller";

export const LoginPage = () => {
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      elements: {
        login: { value: loginValue },
        password: { value: passwordValue },
      },
    } = e.target;
    authController
      .login({ login: loginValue, password: passwordValue })
      .then((_) => {
        navigate("/list");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="main-form">
        <h1 className="main-form_header">Login</h1>
        <label htmlFor="login">Login</label>
        <input id="login" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        {/* <button>Login</button> */}
        <button className="button">Chats</button>
      </form>
    </div>
  );
};
