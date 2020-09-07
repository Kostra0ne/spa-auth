import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./components/auth/AuthProvider";
import "./styles/index.css";
import App from "./App";

// ci-dessous, AuthProvider permet 'd'abonner' des components enfants aux changement du contexte d'authentification
// les valeurs exposées par AuthProvider sont disponible dans TOUS les components enfant de App, sans avoir à les passer en props...
// ces valeurs changent en fonction des réponses du router /api/auth côté backend
// voir  src/components/auth/AuthContext puis src/components/auth/AuthProvider
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
