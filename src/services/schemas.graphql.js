import gql from 'graphql-tag';

export const LOGIN = gql`
    query Login($matricula: String!, $digito: String!, $senha: String!) {
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
`