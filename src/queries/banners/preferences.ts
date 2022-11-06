import gql from "graphql-tag";

const PREFERENCES_QUERY = gql`
  query Preferences {
    prefereces {
      data {
        attributes {
          title
          subtitle
          iconName
        }
      }
    }
  }
`;

export default PREFERENCES_QUERY;