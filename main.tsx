import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./react-app/index.css";
import App from "./react-app/App";

// Load Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
