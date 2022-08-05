import { FC, useState } from "react";
import "./newmorphismButton.css";

type Props = {
  name: string;
  fontRemSize?: number;
};
const NeumorphismButton: FC<Props> = ({ name, fontRemSize = 1 }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      style={{ fontSize: `${fontRemSize}rem` }}
      onClick={onClick}
      className={`${"neumorphismButton"} 
       ${isActive ? "neumorphismButtonActive" : "neumorphismButtonPassive"}
        `}
    >
      {name}
    </button>
  );
};

export default NeumorphismButton;
