import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StringPage from "./routes/string/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="string" element={<StringPage />} />
    </Routes>

    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </BrowserRouter>
);
