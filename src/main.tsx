import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./components/LoginPage"; // Import LoginPage
import HomePage from "./components/HomePage"; // Import HomePage
import { UserProvider } from "./providers/UserContext"; // Import UserProvider
import RegisterPage from "./components/RegisterPage"; // Import RegisterPage



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/home" element={<HomePage />} /> 
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
