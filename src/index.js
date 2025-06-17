import React from "react";
import ReactDOM from "react-dom/client";

export const App = () => (
  <div
    style={{
      fontFamily: "Segoe UI, Arial, sans-serif",
      background: "#f5f7fa",
      borderRadius: "12px",
      padding: "2rem",
      margin: "2rem auto",
      maxWidth: "400px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      textAlign: "center",
      color: "#222",
    }}
  >
    <h2 style={{ color: "#0077cc", marginBottom: "1rem" }}>Webflow + React</h2>
    <p style={{ fontSize: "1.1rem", margin: 0 }}>
      This is a <b>React</b> component inside of <b>Webflow</b>!
    </p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(<App />);

// To test add this script tag in your Webflow project:
// <script src="https://unpkg.com/react@16.4.1/umd/react.production.min.js"></script>
// <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.production.min.js"></script>
// <script src="https://react-to-webpack-bucket.s3.eu-north-1.amazonaws.com/bundle.js"></script>
