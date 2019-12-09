import { createStore, combineReducers } from 'redux';
import { chatReducer, subscribeReducer } from './reducers.redux';
import { authReducer } from './reducers/auth.reducer';

const combine = combineReducers({
    chat: chatReducer,
    subscribe: subscribeReducer,
    auth: authReducer
});

const store = createStore(combine);

export default store;