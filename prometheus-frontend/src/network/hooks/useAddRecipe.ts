import { useMutation } from "@apollo/client";
import ADD_RECIPE from "../../network/gql/recipe/ADD_RECIPE";
const useAddRecipe = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(ADD_RECIPE);

  return { mutateFunction, loading, error, data };
};

export default useAddRecipe;
