import { FC } from "react";
import { ButtonProps } from "types/Button";
import style from "./index.module.css";
const RoundedSideButton: FC<ButtonProps> = ({
  name,
  onClick,
  isLoading,
  fontRemSize = 1,
}) => {
  return (
    <button
      disabled={!isLoading}
      style={{ fontSize: `${fontRemSize}rem` }}
      onClick={onClick}
      className={`${style.neumorphismButton} 
       ${
         isLoading
           ? style.neumorphismButtonActive
           : style.neumorphismButtonPassive
       }
        `}
    >
      {name}
    </button>
  );
};

export default RoundedSideButton;
