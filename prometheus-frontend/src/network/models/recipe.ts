import { gql } from "@apollo/client";

const GET_RECIPE = gql`
  query {
    recipe(id: "1") {
      description
    }
  }
`;

export default GET_RECIPE;
