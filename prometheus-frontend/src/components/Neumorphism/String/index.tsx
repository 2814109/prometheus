import { FC } from "react";
import style from "./index.module.css";
type Props = {
  text: string;
  fontRemSize?: number;
};
const NeumorphismString: FC<Props> = ({ text, fontRemSize = 1 }) => (
  <div className={style.string} style={{ fontSize: `${fontRemSize}rem` }}>
    {text}
  </div>
);

export default NeumorphismString;
