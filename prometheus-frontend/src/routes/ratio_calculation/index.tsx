import { FC, useRef } from "react";
import NeumorphismInput from "../../components/Neumorphism/Input";
import NeumorphismButton from "../../components/Neumorphism/Button/index";

const marginBottom = (marginNumber: number) => {
  return {
    marginBottom: marginNumber,
  };
};
const RatioCalculation: FC = () => {
  const startAtDate = useRef<HTMLInputElement>(null);
  const endOfDate = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    console.log(startAtDate.current?.value);
    console.log(endOfDate.current?.value);
  };

  return (
    <>
      <div style={marginBottom(14)}>
        <NeumorphismInput ref={startAtDate} />
      </div>

      <div style={marginBottom(14)}>
        <NeumorphismInput ref={endOfDate} />
      </div>
      <NeumorphismButton
        onClick={() => {
          onSubmit();
        }}
        name="Submit"
        fontRemSize={0.5}
      />
    </>
  );
};

export default RatioCalculation;
