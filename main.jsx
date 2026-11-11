
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// Check root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found!");
}

// Render application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
