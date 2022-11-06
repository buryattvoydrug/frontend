import gql from "graphql-tag";

const SUB_CATEGORIES_QUERY = gql`
query podkategoriyas {
  podkategoriyas (pagination: {limit: 200}) { 
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
}
`;

export default SUB_CATEGORIES_QUERY;