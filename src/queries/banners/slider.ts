import gql from "graphql-tag";

const SLIDER_QUERY = gql`
  query Sliders {
    sliders {
      data {
        attributes {
          title
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

export default SLIDER_QUERY;