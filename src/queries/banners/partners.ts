import gql from "graphql-tag";

const PARTNERS_QUERY = gql`
  query Partners {
    partners {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default PARTNERS_QUERY;