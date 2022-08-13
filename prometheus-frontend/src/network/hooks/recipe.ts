import { useQuery } from "@apollo/client";
import GET_RECIPE from "../../network/models/recipe";
const useRecipe = () => {
  const { loading, error, data } = useQuery(GET_RECIPE);

  return { loading, error, data };
};

export default useRecipe;
