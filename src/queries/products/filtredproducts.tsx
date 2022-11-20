import gql from "graphql-tag";

const FILTRED_PRODUCTS_QUERY = gql`
query Tovars(
  $slug: String!, 
  $brand: [String!], 
  $priceFrom:Float!, 
  $priceTo:Float!,
  $sort: [String!],
  $page: Int!,
  $pageSize: Int!,
  $search: String!,
  ) {
  articles (
    pagination: {page: $page, pageSize: $pageSize}, 
    filters: { 
      price: { gt: $priceFrom, lt: $priceTo },
      podkategoriya : {
        slug: {contains: $slug}
      },
      brend: {
        title: {in: $brand}
      },
      or:[
        {podkategoriya : {
          title : {containsi: $search}
        }},
        {title: {containsi: $search}},
        {podkategoriya:{ kategoriya: { 
        name: {containsi: $search}}}},
        {brend: {title: {containsi: $search}}}
      ]
    },
    sort: $sort,
  ) 
  {
    meta {
      pagination {
        total
        pageCount
      }
    }
    data {
      attributes {
        slug
        title
        price
        priceText
        podkategoriya  {
          data {
            attributes  {
              slug
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
        brend {
          data {
            attributes {
              title
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

export default FILTRED_PRODUCTS_QUERY;