import { useQuery } from "@apollo/client";
import { IQuery } from "../../types";

const Query = ({ children, query, slug, brand, priceFrom, priceTo, sort, page, pageSize,search }:IQuery) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug, brand: brand, priceFrom: priceFrom, priceTo: priceTo, sort: sort, page, pageSize,search }
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки страницы</p>;
  return children({ data });
};

export default Query;