import { useQuery } from "@apollo/client";
import GET_RECIPE from "../gql/recipe/GET_RECIPE";
const useRecipe = () => {
  const { loading, error, data } = useQuery(GET_RECIPE);

  return { loading, error, data };
};

export default useRecipe;
