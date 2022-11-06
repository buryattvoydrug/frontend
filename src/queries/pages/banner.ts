import gql from "graphql-tag";

const BANNER_QUERY = gql`
query Banners {
  banner {
    data {
      attributes {
        title_1
        image1 {
          data {
            attributes {
              url
            }
          }
        }
        link1
        title2
        text2
        colortext2
        image2 {
          data {
            attributes {
              url
            }
          }
        }
        link2
        title3
        text3
        colortext3
        link3
        image3 {
          data {
            attributes {
              url
            }
          }
        }
        title4
        text4
        image4 {
          data {
            attributes {
              url
            }
          }
        }
        link4
      }
    }
  }
}
`;

export default BANNER_QUERY;