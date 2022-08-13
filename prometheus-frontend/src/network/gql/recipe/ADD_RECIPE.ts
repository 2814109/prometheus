import { gql } from "@apollo/client";

const ADD_RECIPE = gql`
  mutation {
    addRecipe(
      newRecipeData: {
        title: "tefdafsast"
        description: "test1231231231312312231312312312313123123"
        ingredients: "test"
      }
    ) {
      description
    }
  }
`;

export default ADD_RECIPE;
