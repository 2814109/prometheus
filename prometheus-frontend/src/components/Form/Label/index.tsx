import { FC } from "react";
import style from "./index.module.css";

type Props = {
  text: string;
  fontRemSize: number;
};

const Rosetta: FC<Props> = ({ text, fontRemSize = 2 }) => {
  return (
    <label className={style.label} style={{ fontSize: `${fontRemSize}rem` }}>
      {text}
    </label>
  );
};

export default Rosetta;
