import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import RegisterUser from "./components/RegisterUser";
import ProfileUser from "./components/ProfileUser";
import ProtectedRoute from "./components/ProtectedRoute";
import RegistrationForm from "./components/RegisterAsCreator";
import LoginUser from "./components/LoginUser";
import { Contexto } from "./context/Contexto";

function App() {
  return (
    <div>
      <Contexto>
        <Routes>
          <Route path="/" element={<RegisterUser />} />
          <Route path="/registerascreator" element={<RegistrationForm />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route
            path="/profileuser"
            element={
              <ProtectedRoute>
                <ProfileUser />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Contexto>
    </div>
  );
}

export default App;
