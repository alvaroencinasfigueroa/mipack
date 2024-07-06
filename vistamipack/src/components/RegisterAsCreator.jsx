import React, { useState } from "react";
import { Form, Input, Button, Label, FormGroup } from "reactstrap";
import "./RegisterAsCreator.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [dni, setDni] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar datos del formulario a un servidor
  };

  return (
    <Form onSubmit={handleSubmit} className="registration-form">
      <FormGroup>
        <Label for="username">Nombre de usuario</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Correo electrónico</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Contraseña</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Número de teléfono</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="tel"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="country">País</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="text"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="city">Ciudad</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="text"
          name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="dni">DOCUMENTO DE INDENTIDAD</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="text"
          name="dni"
          value={dni}
          onChange={(event) => setDni(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="accountNumber">Número de cuenta bancaria</Label>
        <Input
          style={{ backgroundColor: "#f7bfbe" }}
          type="text"
          name="accountNumber"
          value={accountNumber}
          onChange={(event) => setAccountNumber(event.target.value)}
        />
      </FormGroup>
      <Button
        type="submit"
        style={{
          backgroundColor: "#f7bfbe",
          color: "#000",
          fontSize: "1 rem",
          padding: "0.5 rem 1rem",
          borderRadius: "0.2 rem",
          border: "2px solid #000",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        REGISTRARSE COMO CREADOR
      </Button>

      <Button
        type="submit"
        style={{
          backgroundColor: "#f7bfbe",
          color: "#000",
          fontSize: "1 rem",
          padding: "0.5 rem 1rem",
          borderRadius: "0.2 rem",
          border: "2px solid #000",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          float: "right",
          bottom: "10px",
        }}
      >
        LOGIN
      </Button>

      <Button
    type="submit"
    style={{
      backgroundColor: '#f7bfbe',
      color: '#000',
      fontSize: "1 rem",
      padding: "0.5 rem 1rem",
      borderRadius: "0.2 rem",
      border: "2px solid #000",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      float: "left",
      bottom: "10px",
    }}
  >
    REGISTER AS USER
  </Button>

    </Form>
  );
};

export default RegistrationForm;
