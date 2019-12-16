import { InMemoryCache, HttpLink, from, } from "apollo-boost";
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';
import { getToken } from '../providers/auth';
import { split } from 'apollo-link';


const wsLink = new WebSocketLink({
  uri: 'ws://unicap-social.herokuapp.com',
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({ 
  uri: 'https://unicap-social.herokuapp.com' 
});

const link = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


const authMiddleware = setContext(operation =>
  getToken().then((token) => {
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  })
);

const client = new ApolloClient({    
    link: from([authMiddleware, link]),
    cache: new InMemoryCache(),
});

export default client;