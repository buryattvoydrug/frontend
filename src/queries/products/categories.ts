import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
query categories {
  categories (pagination: {limit: 100}) { 
    data {
      attributes {
        name
        podkategoriyass {
          data {
            attributes {
              slug
              title
              kategoriya {
                data {
                  attributes {
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export default CATEGORIES_QUERY;