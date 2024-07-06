import React, { useState } from "react";
import "./RegisterUser.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";
import { BiSolidUserCircle, BiUserCircle } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import axios from "axios";
import ProfileUser from "./ProfileUser";
import { useEmail } from "../context/Contexto";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const [username, setUsername] = useState('');
  const [userName, setUserName] = useState("");
  /*const [user, setUser] = useState({
    email: email,
    password: password,
  })*/
  const { setEmailValue } = useEmail();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDTO = {
      userName,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/addUsuario",
        userDTO
      );
      if (response.status === 200) {
        setEmailValue(email);
        console.log("Email antes de la navegación:", email);
        navigate("/profileuser", { email });
        alert("Usuario Registrado Con Éxito");
      }
    } catch (error) {
      console.log("hola error", error);
    }
  };

  const handleGoogle = async (e) => {
    console("hola");
  };

  return (
    <div className="registro-box">
      <h1>MIPACK</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">USERNAME</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="INGRESAR USERNAME"
          />
        </div>

        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="INGRESAR EMAIL"
          />
        </div>

        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="INGRESAR PASSWORD"
          />
        </div>

        <button
          type="submit"
          className="pulse"
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
          REGISTER
        </button>
      </form>

      <div>
        <Button
          className="pulse"
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
            marginTop: "10px",
          }}
        >
          <BiSolidUserCircle style={{marginRight: "5px"}}/>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/registerascreator"
          >
            <span>REGISTER AS CREATOR</span>
          </Link>
        </Button>

        <Button
          className="pulse"
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
          <BiUserCircle style={{marginRight: "5px"}}/>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/loginuser"
          >
            <span>LOGIN</span>
          </Link>
        </Button>

        <Button className="pulse" style={{
          color: "white",
          marginLeft: "1px",
          background: "#222222",
          borderRadius: "20px",
          fontSize: "18px",
          outline: "none",
          height: "50%",
          width: "100%"}}>
          
          <IoLogoTwitter style={{marginRight: "5px"}}/>
          <span>REGISTER WITH X</span>
          
        </Button>

        <Button className="pulse" style={{
          color: "white",
          marginLeft: "1px",
          background: "#222222",
          borderRadius: "20px",
          fontSize: "18px",
          outline: "none",
          height: "50%",
          width: "100%"}}>
          <FaGoogle style={{marginRight: "5px"}}/>
          <span>REGISTER WITH GOOGLE</span>
        </Button>
      </div>
    </div>
  );
};

export default RegisterUser;
