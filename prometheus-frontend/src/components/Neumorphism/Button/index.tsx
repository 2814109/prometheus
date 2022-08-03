import { FC, useState } from "react";
import style from "./index.module.css";

type Props = {
  onClick: () => void;
  name: string;
  fontRemSize?: number;
};
const NeumorphismButton: FC<Props> = ({ name, onClick, fontRemSize = 1 }) => {
  //   const [isActive, setIsActive] = useState<boolean>(false);
  const isActive = false;
  return (
    <button
      style={{ fontSize: `${fontRemSize}rem` }}
      onClick={onClick}
      className={`${style.neumorphismButton} 
       ${
         isActive
           ? style.neumorphismButtonActive
           : style.neumorphismButtonPassive
       }
        `}
    >
      {name}
    </button>
  );
};

export default NeumorphismButton;
