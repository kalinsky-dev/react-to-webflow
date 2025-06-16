import React from "react";
import ReactDOM from "react-dom/client";

export const App = () => <div>This is a React component inside of Webflow!</div>;

const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(<App />);
