import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import App from './App';


const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/public-gravelantler-621/graphql2/dev'
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();