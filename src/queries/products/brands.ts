import gql from "graphql-tag";

const BRANDS_QUERY = gql`
query brends {
  brends {
    data {
      attributes {
        title
      }
    }
  }
}
`;

export default BRANDS_QUERY;