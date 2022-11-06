import gql from "graphql-tag";

const FOOTER_QUERY = gql`
  query Footer {
    footer {
      data {
        attributes {
          email
          Phone1
          Phone2
          Phone3
          CompanyName
          OGRN
          INN
          KPP
          AdresObosoblennogoPodrazdeleniya
          AdresSklada1Index
          AdresSklada1Adres
          AdresSklada2Index
          AdresSklada2Adres
        }
      }
    }
  }
`;

export default FOOTER_QUERY;