import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

// Bootstrap CSS and JS 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* HashRouter enables routing for everything inside it */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);