import { FC } from "react";
import useAddRecipe from "../../../network/hooks/useAddRecipe";
import NeumorphismString from "../../../components/Neumorphism/String";
import { marginBottom } from "../../../libs/createCss";
import NeumorphismButton from "../../../components/Neumorphism/Button";
const Index: FC = () => {
  const { mutateFunction, loading, error, data } = useAddRecipe();

  console.log(data);

  return (
    <>
      <div style={marginBottom(24)}>
        <NeumorphismString text="Recipe" fontRemSize={2} />
      </div>
      <NeumorphismString
        text={loading ? "Loading ..." : JSON.stringify(data)}
        fontRemSize={1.5}
      />

      {error && <span>{error.message}</span>}

      <NeumorphismButton onClick={mutateFunction} name="Submit" />
    </>
  );
};

export default Index;
