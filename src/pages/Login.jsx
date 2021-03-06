import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginValidation from "../services/loginValidation";
import actionLogin from "../redux/actions/actionLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLocalStorage = (emailString) => {
    localStorage.setItem("user", JSON.stringify({ email: emailString }));
    localStorage.setItem("mealsToken", 1);
    localStorage.setItem("cocktailsToken", 1);
  };

  return (
    <div className="login__general-container">
      <div className="login__general-configurations">
        <Form className="form-container">
          <div>
            <p className="login__minimal-title">DESIGNED FOR EVERY</p>
            <h1 className="login__title-recipes">Homemade</h1>
            <p className="login__subtitle-minimal">COOKER</p>
          </div>
          <div className="form__backgground">
          <Form.Group className="form-group">
            <Form.Label htmlFor="email">
              Email
              <Form.Control
                onChange={({ target: { value } }) => setEmail(value)}
                data-testid="email-input"
                type="email"
                placeholder="Digite qualquer email válido"
                name="email"
                className="login__input-configuration"
              />
            </Form.Label>
            <Form.Label htmlFor="password" data-testid="password">
              Password
              <Form.Control
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                name="password"
                placeholder="Digite qualquer senha (3 caracteres)"
                data-testid="password-input"
                className="login__input-configuration"
              />
            </Form.Label>
            <Link to="/comidas">
              <button
                className="login-button"
                data-testid="login-submit-btn"
                disabled={!loginValidation({ email, password })}
                onClick={() => {
                  dispatch(actionLogin(email));
                  handleLocalStorage(email);
                }}
              >
                Entrar
              </button>
            </Link>
          </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
