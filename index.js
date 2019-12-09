import React from 'react';
import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './src';
import { name as appName } from './app.json';

// import store from './src/store';
import client from './src/services/apollo';

import { registerCustomIconType } from 'react-native-elements';
import Icon from './src/helpers/custom.icon';

const MyApp = () => {
    registerCustomIconType("feather", Icon);
    return (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    )
};

AppRegistry.registerComponent(appName, () => MyApp);
