import { ApolloClient } from 'apollo-client';
import { InMemoryCache, ApolloLink, HttpLink } from "apollo-boost";
import { getToken } from '../providers/auth';

const httpLink = new HttpLink({ uri: 'http://192.168.0.106:4000/' });

const authLink = new ApolloLink((operation, forward) => {
    const token = getToken();
  
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  
    return forward(operation);
});

const client = new ApolloClient({    
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;