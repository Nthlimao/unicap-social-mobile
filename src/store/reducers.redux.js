const INITIAL_CHAT = {
    data: []
}

export const chatReducer = (state = INITIAL_CHAT, action) => {
    switch (action.type) {
        case 'START_CHAT':
            return { ...state, data: action.data };
        default:
            return state;
    }
}

const INITIAL_SUBSCRIBE = {
    data: []
}

export const subscribeReducer = (state = INITIAL_SUBSCRIBE, action) => {
    
    switch (action.type) {
        case 'START_SUBSCRIBE':
            return { ...state, data: action.data };
        default:
            return state;
    }
}
