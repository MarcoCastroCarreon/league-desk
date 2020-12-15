import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const Apollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
  }),
});

export default Apollo;
