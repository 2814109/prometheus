import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StringPage from "./string/index";
import ButtonPage from "./button/index";
import DynamicForm from "./dynamic_form/index";
import RatioCalculation from "./ratio_calculation";
import App from "../App";

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="string" element={<StringPage />} />
      <Route path="button" element={<ButtonPage />} />
      <Route path="dynamic_form" element={<DynamicForm />} />
      <Route path="ratio_calculation" element={<RatioCalculation />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
