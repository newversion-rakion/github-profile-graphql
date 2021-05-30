import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client/react';
import client from 'utils/graphql/config'
import './index.css'
import App from './App'

const Wrapper = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

ReactDOM.render(<Wrapper />, document.getElementById('root'))
