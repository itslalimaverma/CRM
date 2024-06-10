// client/src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/App.css"; // Ensure this is imported to load global styles

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
