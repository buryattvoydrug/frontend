import { ApolloClient, InMemoryCache, NormalizedCacheObject, HttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});
const client = new ApolloClient<NormalizedCacheObject>({
  cache,
  link,
});

export default client;