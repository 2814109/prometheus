import { FC } from "react";
import useRecipe from "../../network/hooks/recipe";
const Index: FC = () => {
  const { loading, error, data } = useRecipe();
  console.log(data);

  return (
    <>
      <h1>Recipe</h1>
      {loading ? <span>Loading ...</span> : <span>{JSON.stringify(data)}</span>}
      {error && <span>{error.message}</span>}
    </>
  );
};

export default Index;
