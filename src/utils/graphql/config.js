import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GITHUB_GRAPHQL_ENDPOINT } from 'utils/constants'

const httpLink = createHttpLink({
  uri: GITHUB_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          GetStargazersByRepository: {
            merge: true,
          },
        },
      },
    },
  })
});

export default client
