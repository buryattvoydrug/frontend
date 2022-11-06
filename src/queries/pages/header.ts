import gql from "graphql-tag";

const HEADER_QUERY = gql`
  query Header {
    header {
      data {
        attributes {
          Phone
          Mail
        }
      }
    }
  }
`;

export default HEADER_QUERY;