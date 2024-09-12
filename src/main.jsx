import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ParentComponent from "./components/ParentComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParentComponent>
      <App />
    </ParentComponent>
  </StrictMode>
);
