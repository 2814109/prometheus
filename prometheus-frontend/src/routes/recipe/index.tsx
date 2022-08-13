import { FC } from "react";
import useRecipe from "../../network/hooks/recipe";
import NeumorphismString from "../../components/Neumorphism/String";
import { marginBottom } from "../../libs/createCss";
const Index: FC = () => {
  const { loading, error, data } = useRecipe();
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
    </>
  );
};

export default Index;
