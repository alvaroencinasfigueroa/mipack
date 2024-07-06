import React, { useState } from "react";
import "./LoginUser.css";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { useEmail } from "../context/Contexto";
import axios from "axios";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setEmailValue } = useEmail();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        null,
        {
          params: {
            correo: email,
            password: password,
          },
        }
      );
      setMessage(response.data);
      setEmailValue(email);
      console.log("Email antes de la navegación:", email);
      navigate("/profileuser", { email });
      alert("Usuario Registrado Con Éxito");
    } catch (error) {
      setMessage(error.response.data);
      alert("datos incorrectos...");
    }
  };

  return (
    <div className="registro-box-login">
      LoginUser
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="ENTER YOUR EMAIL"
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="ENTER YOUR PASSWORD"
          />
        </div>
        <button
          type="submit"
          className="pulse-login"
          style={{
            color: "white",
            marginLeft: "1px",
            background: "#222222",
            borderRadius: "20px",
            height: "60px",
            width: "170px",
            fontSize: "18px",
            outline: "none",
            width: "100%",
            marginBottom: "1px",
          }}
        >
          LOGIN
        </button>
      </form>
      {message && <p>{message}</p>}
      <div>
        <Button
          className="pulse-login"
          style={{
            color: "white",
            marginLeft: "1px",
            background: "#222222",
            borderRadius: "20px",
            height: "60px",
            width: "170px",
            fontSize: "18px",
            outline: "none",
            width: "100%",
            height: "50%",
          }}
        >
          <BiUserCircle style={{ marginRight: "5px" }} />
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <span>DO NOT HAVE AN ACCOUNT: REGISTER</span>
          </Link>
        </Button>

        <Button
          className="pulse-login"
          style={{
            color: "white",
            marginLeft: "1px",
            background: "#222222",
            borderRadius: "20px",
            height: "60px",
            width: "170px",
            fontSize: "18px",
            outline: "none",
            width: "100%",
            height: "50%",
          }}
        >
          <FaGoogle style={{ marginRight: "5px" }} />
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <span>LOGIN WITH GOOGLE</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginUser;
