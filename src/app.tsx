import { ApolloProvider } from '@apollo/react-hooks'
import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { client } from './graphql/client'

export const App = () => (
  <>
    <Suspense fallback="Loading..">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route path="/"></Route>
        </BrowserRouter>
      </ApolloProvider>
    </Suspense>
  </>
)
