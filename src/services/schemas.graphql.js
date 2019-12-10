import gql from 'graphql-tag';

const LOGIN = gql`
    mutation Login($matricula: String!, $digito: String!, $senha: String!) {
        login(matricula: $matricula, digito: $digito, senha: $senha) {
            session
            token
            student {
                name
                matriculation
                digit
                email
            }
        }
    }
`;

const SYNC = gql`
    mutation Sync($session: String!){
        sync(session: $session){
            session,
            subscribe {
                _id,
                name,
                code,
                class
            },
            canSubscribe {
                _id,
                name,
                code,
                class
            }
        }
    }
`;

const GET_CHATS = gql`
    query Subjects {
        subjects {
            _id,
            name,
            code,
            class,
            initial,
            message {
                value,
                created_at,
                sender {
                name
                }
            }
        }
    }
`;

const GET_SUBSCRIBES = gql`
    query Subscribes {
        subscribes {
            _id,
            name,
            code,
            class
        }
    }
`;

const SUBSCRIPTION = gql`
    mutation Subscription($subject: ID!) {
        subscription(subject: $subject) {
            _id,
            name,
            code,
            class 
        }
    }
`;

const GET_MESSAGES = gql`
    query Messages($chat: ID!) {
        messages(chat: $chat) {
            _id
            value,
            created_at,
            sender {
                name
            }
        }
    }
`;

export default {
    LOGIN,
    SYNC,
    GET_CHATS,
    GET_SUBSCRIBES,
    SUBSCRIPTION,
    GET_MESSAGES
}