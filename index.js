import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './src';
import { name as appName } from './app.json';

import client from './src/services/apollo';

const MyApp = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => MyApp);
