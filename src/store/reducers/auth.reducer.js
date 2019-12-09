const AUTH_INITIAL = {
    token: null,
    session: null,
    user: {}
}

export const authReducer = (state = AUTH_INITIAL, action) => {
    switch (action.type) {
        case 'SET_USER':
            break;
        case 'SET_TOKEN':
            return { ...state, token: action.token }
        case 'SET_SESSION':
            return { ...state, token: action.session }
        default:
            return state;
    }
}