// EmailContext.js
import React, { createContext, useContext, useState } from 'react';

const EmailContext = createContext();

export const Contexto = ({ children }) => {
  const [email, setEmail] = useState("");

  const setEmailValue = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <EmailContext.Provider value={{ email, setEmailValue }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail debe ser utilizado dentro de EmailProvider');
  }
  return context;
};
