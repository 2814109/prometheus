import { forwardRef } from "react";
import style from "./index.module.css";

const NeumorphismInput = forwardRef<HTMLInputElement>((_, ref) => {
  return <input className={style.neumorphismInput} ref={ref} />;
});

export default NeumorphismInput;
