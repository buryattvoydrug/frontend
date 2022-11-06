import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
query Tovars {
  articles {
    data {
      attributes {
        title
        price
        podkategoriya {
          data {
            attributes {
              title
              kategoriya {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
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

export default PRODUCTS_QUERY;