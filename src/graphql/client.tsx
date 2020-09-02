import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import withApollo from 'next-with-apollo'
import { config } from '../config'

const link = new HttpLink({ uri: config.apiURL })

export const client = withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    }),
)
