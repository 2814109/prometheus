import { FC, useState } from "react";
import style from "./index.module.css";

const NeumorphismButton: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log(isActive);
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={`${style.neumorphismButton} 
       ${
         isActive
           ? style.neumorphismButtonActive
           : style.neumorphismButtonPassive
       }
        `}
    />
  );
};

export default NeumorphismButton;
