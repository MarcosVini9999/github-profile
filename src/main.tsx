import ReactDOM from "react-dom/client";
import { Router } from "@/components";
import { ThemeProvider } from "@/contexts";
import "@/assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
