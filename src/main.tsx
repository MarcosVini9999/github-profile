import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/components";
import { ThemeProvider } from "@/contexts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
