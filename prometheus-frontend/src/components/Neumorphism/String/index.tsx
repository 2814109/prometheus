import { FC } from "react";
import style from "./index.module.css";
type Props = {
  text: string;
};
const NeumorphismString: FC<Props> = ({ text }) => (
  <div className={style.string}>{text}</div>
);

export default NeumorphismString;
