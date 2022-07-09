import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://wisata-pekalongan.herokuapp.com/',
  fetchOptions: {
  	mode: 'no-cors'
  },
  cache: new InMemoryCache()
});

export default client;