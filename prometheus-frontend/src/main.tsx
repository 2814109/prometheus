import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StringPage from "./routes/string/index";
import ButtonPage from "./routes/button/index";
import DynamicForm from "./routes/dynamic_form/index";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="string" element={<StringPage />} />
      <Route path="button" element={<ButtonPage />} />
      <Route path="dynamic_form" element={<DynamicForm />} />
    </Routes>

    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </BrowserRouter>
);
