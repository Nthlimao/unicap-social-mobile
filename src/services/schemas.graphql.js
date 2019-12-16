import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation Login($matricula: String!, $digito: String!, $senha: String!) {
        login(matricula: $matricula, digito: $digito, senha: $senha) {
            session
            token
            student {
                _id
                name
                matriculation
                digit
                email
            }
        }
    }
`;

export const SYNC = gql`
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

export const GET_CHATS = gql`
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

export const GET_SUBSCRIBES = gql`
    query Subscribes {
        subscribes {
            _id,
            name,
            code,
            class
        }
    }
`;

export const SUBSCRIPTION = gql`
    mutation Subscription($subject: ID!) {
        subscription(subject: $subject) {
            _id,
            name,
            code,
            class 
        }
    }
`;

export const GET_MESSAGES = gql`
    query Messages($chat: ID!) {
        messages(chat: $chat) {
            id: _id,
            value,
            created_at,
            sender {
                id: _id,
                name
            }
        }
    }
`;

export const SEND_MESSAGE = gql`
    mutation SendMessage($chat: ID!, $message: String!) {
        send(chat: $chat, message: $message) {
            value
        }
    }
`;

export const SENT_MESSAGE = gql`
    query Sent($chat: ID!, $message: String!) {
        sent(chat: $chat, message: $message) {
            value
        }
    }
`

export const SET_MESSAGE = gql`
    mutation Message($chat: ID!, $message: String!) {
        message(chat: $chat, message: $message) {
            id: _id,
            value,
            created_at,
            sender {
                id: _id,
                name
            }
        }
    }
`;

export const CHAT_CHANNEL = gql`
  subscription onMessageSent {
    messageSent {
        id: _id,
        value,
        created_at,
        sender {
            id: _id,
            name
        }
    }
  }
`;