import gql from "graphql-tag";

const ABOUT_QUERY = gql`
  query About {
    about {
      data {
        attributes {
          content
        }
      }
    }
  }
`;

export default ABOUT_QUERY;