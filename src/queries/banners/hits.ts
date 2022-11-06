import gql from "graphql-tag";

const HITS_QUERY = gql`
query Hits {
  hits {
    data {
      attributes {
        title
        price
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

export default HITS_QUERY;