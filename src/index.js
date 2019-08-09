import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import * as serviceWorker from './serviceWorker';


import App from './App';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/public-gravelantler-621/graphql2/dev'
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>, document.getElementById('root'));

serviceWorker.unregister();